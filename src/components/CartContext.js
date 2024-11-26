import React, { createContext, useState } from 'react';

// Create Context
export const CartContext = createContext();

// Provider Component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add video to the cart
  const addVideoToCart = (video) => {
    setCart((prevCart) => [...prevCart, video]);
  };

  // Function to remove video from the cart
  const removeVideoFromCart = (videoId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== videoId));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addVideoToCart, removeVideoFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
