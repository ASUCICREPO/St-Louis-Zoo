import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartDisplay from '../components/Display/CartDisplay';
import { CartContext } from '../components/CartContext';

const ShoppingCart = () => {
  const navigate = useNavigate();

  // Access cart and removeVideoFromCart from CartContext
  const { cart, removeVideoFromCart } = useContext(CartContext);

  // Inline CSS for styling
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    fontFamily: 'Metapro Normal, sans-serif',
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'left',
  };

  const totalContainerStyle = {
    backgroundColor: '#EEECE5',
    padding: '50px',
    width: '500px',
    textAlign: 'center',
    borderRadius: '8px',
  };

  const totalTextStyle = {
    marginBottom: '20px',
    marginTop: '20px',
  };

  const checkoutButtonStyle = {
    backgroundColor: '#FDBD57',
    color: '#000',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '4px',
  };

  const backButtonStyle = {
    backgroundColor: '#FFF',
    color: '#000',
    border: '2px solid #000',
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '4px',
    marginTop: '20px',
  };

  // Navigation handlers
  const handleCheckout = () => {
    navigate('/confirm');
  };

  const handleBackToSearch = () => {
    navigate('/search');
  };

  // Function to handle removal of a video from the cart
  const handleRemoveVideo = (videoId) => {
    removeVideoFromCart(videoId); // Remove video via context
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1 style={titleStyle}>Your Cart</h1>
      <div style={containerStyle}>
        {cart.length > 0 ? (
          <CartDisplay videos={cart} onRemove={handleRemoveVideo} />
        ) : (
          <p>No videos in your cart.</p>
        )}
        <div style={totalContainerStyle}>
          <p style={totalTextStyle}>
            Total<br />
            Number of videos: {cart.length}
          </p>
          {cart.length > 0 && (
            <button style={checkoutButtonStyle} onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          )}
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <button style={backButtonStyle} onClick={handleBackToSearch}>
          Back to Search
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
