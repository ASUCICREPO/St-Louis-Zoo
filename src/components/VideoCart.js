// videoCart.js

class VideoCart {
    constructor() {
      this.addedVideos = []; // Initialize an empty array to store added videos
    }
  
    addVideo(video) {
      // Add video to the cart array if it doesn't already exist
      if (!this.addedVideos.some((v) => v.id === video.id)) {
        this.addedVideos.push(video);
        console.log('Video added to cart:', video);
      } else {
        console.log('Video already in cart:', video);
      }
    }
  
    removeVideo(video) {
      // Remove video from the cart array
      this.addedVideos = this.addedVideos.filter((v) => v.id !== video.id);
      console.log('Video removed from cart:', video);
    }
  
    getAddedVideos() {
      // Return a copy of the added videos array
      return [...this.addedVideos];
    }
  
    clearCart() {
      // Optionally add a method to clear the entire cart
      this.addedVideos = [];
      console.log('Cart cleared');
    }
  }
  
  // Create an instance of VideoCart
  const videoCart = new VideoCart();
  
  // Export the instance and methods
  export const addVideoToCart = (video) => videoCart.addVideo(video);
  export const removeVideoFromCart = (video) => videoCart.removeVideo(video);
  export const getAddedVideos = () => videoCart.getAddedVideos();
  export const clearCart = () => videoCart.clearCart();
  