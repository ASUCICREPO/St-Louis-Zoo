import axios from "axios"

// initializing axios
const api = axios.create({
  baseURL: "/",
})

// original source: https://github.com/pilovm/multithreaded-uploader/blob/master/frontend/uploader.js
export class Uploader {
  constructor(options) {
    this.useTransferAcceleration = options.useTransferAcceleration
    options.chunkSize = options.chunkSize || 0
    this.chunkSize = Math.max((1024 * 1024 * options.chunkSize), (1024 * 1024 * 5))
    // number of parallel uploads
    options.threadsQuantity = options.threadsQuantity || 0
    this.threadsQuantity = Math.min(options.threadsQuantity || 5, 15)
    // adjust the timeout value to activate exponential backoff retry strategy 
    this.timeout = 0
    this.file = options.file
    this.fileName = options.fileName
    this.metadata = options.metadata
    this.aborted = false
    this.uploadedSize = 0
    this.progressCache = {}
    this.activeConnections = {}
    this.parts = []
    this.uploadedParts = []
    this.fileId = null
    this.fileKey = null
    this.onProgressFn = () => {}
    this.onErrorFn = () => {}
    this.baseURL = options.baseURL
  }

  start() {
    console.log("Start")
    console.log("Threads Quantity: ", this.threadsQuantity)
    // Return a promise that resolves when the upload is complete
    this.uploadPromise = new Promise((resolve, reject) => {
        this.resolveUpload = resolve;
        this.rejectUpload = reject;
    
        // Start the upload process
        this.initialize();
        });
    
    return this.uploadPromise; // return the promise to be awaited or chained
  }

  async initialize() {
    try {
      // adding the the file extension (if present) to fileName
      let fileName = this.file.name
      console.log("File Name in initialize: ", fileName)
      // initializing the multipart request
      const videoInitializationUploadInput = {
        name: fileName,
        metadata: this.metadata
      }
      const initializeReponse = await api.request({
        url: "/initialize",
        method: "POST",
        data: videoInitializationUploadInput,
        baseURL:this.baseURL,
        headers: {
          "Content-Type": "application/json",
        }
      })

      const AWSFileDataOutput = initializeReponse.data
      console.log(AWSFileDataOutput)
      this.fileId = AWSFileDataOutput.fileId
      this.fileKey = AWSFileDataOutput.fileKey

      // retrieving the pre-signed URLs
      const numberOfparts = Math.ceil(this.file.size / this.chunkSize)
      console.log("Number of parts: ", numberOfparts)

      const AWSMultipartFileDataInput = {
        fileId: this.fileId,
        fileKey: this.fileKey,
        parts: numberOfparts,
      }

      const urlsResponse = await api.request({
        url: this.useTransferAcceleration?"/getPreSignedTAUrls":"/getPreSignedUrls",
        method: "POST",
        data: AWSMultipartFileDataInput,
        baseURL:this.baseURL
      })

      console.log("New Parts ", urlsResponse.data.parts)
      const newParts = urlsResponse.data.parts
      this.parts.push(...newParts)

      this.sendNext()
    } catch (error) {
      console.log("Error in initialize: ", error)
      await this.complete(error)
    }
  }

  sendNext(retry=0) {
    const activeConnections = Object.keys(this.activeConnections).length

    if (activeConnections >= this.threadsQuantity) {
      return
    }

    if (!this.parts.length) {
      if (!activeConnections) {
        this.complete()
      }

      return
    }

    const part = this.parts.pop()    
    console.log("part :", part.PartNumber)   
    console.log("File name: ",this.fileKey)
    console.log("Time now ", new Date().toString())
    if (this.file && part) {
      const sentSize = (part.PartNumber - 1) * this.chunkSize
      const chunk = this.file.slice(sentSize, sentSize + this.chunkSize)

      const sendChunkStarted = () => {
        this.sendNext()
      }

      this.sendChunk(chunk, part, sendChunkStarted)
        .then(() => {
          this.sendNext()
        })
        .catch((error) => {          
          if (retry <= 6){
            retry++
            const wait = (ms) => new Promise((res) => setTimeout(res, ms));
            //exponential backoff retry before giving up
            console.log(`File ${this.fileKey} Part#${part.PartNumber} failed to upload, backing off ${2 ** retry * 500} before retrying...`)
            console.log("in retry code, All uploadedParts done till now : ",this.uploadedParts)
            wait(2 ** retry * 500).then(() => {              
              this.parts.push(part)
              this.sendNext(retry)
            })
          }else{
            console.log(`Part#${part.PartNumber} failed to upload, giving up`)
            this.complete(error)
          }
        })
    }
  }

  async complete(error) {
    if (error && !this.aborted) {
      this.onErrorFn(error)
      this.rejectUpload(error);
      return
    }

    if (error) {
      this.onErrorFn(error)
      this.rejectUpload(error);
      return
    }

    try {
      await this.sendCompleteRequest()
      this.resolveUpload(); // Resolve the promise when upload is complete
    } catch (error) {
      this.onErrorFn(error)
      this.rejectUpload(error); // Reject the promise with the error
    }
  }

  async sendCompleteRequest() {
    if (this.fileId && this.fileKey) {
      const videoFinalizationMultiPartInput = {
        fileId: this.fileId,
        fileKey: this.fileKey,
        parts: this.uploadedParts,
      }

      await api.request({
        url: "/finalize",
        method: "POST",
        data: videoFinalizationMultiPartInput,
        baseURL:this.baseURL
      })
    }
  }

  sendChunk(chunk, part, sendChunkStarted) {
    return new Promise((resolve, reject) => {
      this.upload(chunk, part, sendChunkStarted)
        .then((status) => {
          if (status !== 200) {
            reject(new Error("Failed chunk upload"))
            return
          }

          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  handleProgress(part, event) {
    if (this.file) {
      if (event.type === "progress" || event.type === "error" || event.type === "abort") {
        this.progressCache[part] = event.loaded
      }

      if (event.type === "uploaded") {
        this.uploadedSize += this.progressCache[part] || 0
        delete this.progressCache[part]
      }

      const inProgress = Object.keys(this.progressCache)
        .map(Number)
        .reduce((memo, id) => (memo += this.progressCache[id]), 0)

      const sent = Math.min(this.uploadedSize + inProgress, this.file.size)

      const total = this.file.size

      const percentage = Math.round((sent / total) * 100)

      this.onProgressFn({
        sent: sent,
        total: total,
        percentage: percentage,
      })
    }
  }

  upload(file, part, sendChunkStarted) {
    // uploading each part with its pre-signed URL
    return new Promise((resolve, reject) => {
      const throwXHRError = (error, part, abortFx) => {    
        delete this.activeConnections[part.PartNumber - 1]
        reject(error)
        window.removeEventListener('offline', abortFx)    
      }      
      if (this.fileId && this.fileKey) {
        if(!window.navigator.onLine){
          reject(new Error("System is offline"))
          return 
        }

        const xhr = (this.activeConnections[part.PartNumber - 1] = new XMLHttpRequest())
        xhr.timeout = this.timeout
        sendChunkStarted()

        const progressListener = this.handleProgress.bind(this, part.PartNumber - 1)

        xhr.upload.addEventListener("progress", progressListener)

        xhr.addEventListener("error", progressListener)
        xhr.addEventListener("abort", progressListener)
        xhr.addEventListener("loadend", progressListener)

        xhr.open("PUT", part.signedUrl)
        const abortXHR = () => xhr.abort()
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            const ETag = xhr.getResponseHeader("ETag")

            if (ETag) {
              const uploadedPart = {
                PartNumber: part.PartNumber,
                ETag: ETag.replaceAll('"', ""),
              }

              this.uploadedParts.push(uploadedPart)
              console.log("Time now ", new Date().toString())
              resolve(xhr.status)
              delete this.activeConnections[part.PartNumber - 1]
              window.removeEventListener('offline', abortXHR)
            }
          }
        }

        xhr.onerror = (error) => {
          throwXHRError(error, part, abortXHR)
        }
        xhr.ontimeout = (error) => {
          throwXHRError(error, part, abortXHR)
        }
        xhr.onabort = () => {
          throwXHRError(new Error("Upload canceled by user or system"), part)
        }
        window.addEventListener('offline', abortXHR);
        xhr.send(file)
      }
    })
  }



  onProgress(onProgress) {
    this.onProgressFn = onProgress
    return this
  }

  onError(onError) {
    this.onErrorFn = onError
    return this
  }

  abort() {
    Object.keys(this.activeConnections)
      .map(Number)
      .forEach((id) => {
        this.activeConnections[id].abort()
      })

    this.aborted = true
  }
}
