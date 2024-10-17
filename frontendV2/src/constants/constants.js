// need to add the apigateway url in variable baseUrl generated by the CDK code ()
export const baseUrl = "";

// if you are using transfer acceleration, set this to true
export const transferAcceleration = true;

// partSize indicates the size of each part in multipart upload
export const partSize = 50

// numUploads indicates the number of parallel uploads
export const numUploads = 6;

// need to add the user pool id generated by the CDK code
export const userPoolId = "";

//need to add the user pool web client id generated by the CDK code
export const userPoolWebClientId = "";

// need to add aws region here (e.g. "us-east-1")
export const region = "";

export const titleList = ['Select Video', 'Required Tags 1', 'Required Tags 2', 'Optional Tags 1', 'Optional Tags 2', 'Confirm, Uploaded Video']

