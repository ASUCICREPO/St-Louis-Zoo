import React from 'react';
import { useNavigate } from 'react-router-dom';
import thumbnail from '../assets/images/logo/thumbnail.png';
import deleteIcon from '../assets/icons/Delete.png';

const ShoppingCart = () => {
  const navigate = useNavigate();

  // Inline CSS styles
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

  const videoListContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const videoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const dividerStyle = {
    borderBottom: '1px solid #ccc',
    marginBottom: '20px',
    width: '100%',
  };

  const videoInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px',
  };

  const videoTitleStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
  };

  const removeButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const deleteIconStyle = {
    marginLeft: '10px',
    width: '16px',
    height: '16px',
  };

  const totalContainerStyle = {
    backgroundColor: '#EEECE5',
    padding: '50px',
    width: '500px', // Increased width for the total container
    textAlign: 'center',
    borderRadius: '8px',
    border: '1px',
  };

  const totalTextStyle = {
    marginBottom: '20px',
    marginTop: '20px'
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
    textAlign: 'right',
    marginTop: '20px',
  };

  // Handle navigation when buttons are clicked
  const handleCheckout = () => {
    navigate('/confirm');
  };

  const handleBackToSearch = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '40px' }}>
      {/* Title */}
      <h1 style={titleStyle}>Your Cart</h1>

      {/* Cart and Video Section */}
      <div style={containerStyle}>
        {/* Video list */}
        <div style={videoListContainerStyle}>
          {/* Video 1 */}
          <div style={videoContainerStyle}>
            <img src={thumbnail} alt="Thumbnail" style={{ width: '120px', height: '80px' }} />
            <div style={videoInfoStyle}>
              <span style={videoTitleStyle}>Video Title 1</span>
              <span>Duration: 3:00</span>
              <span>Date: 2024-10-12</span>
              <div style={removeButtonStyle} onClick={() => console.log('Remove Video 1')}>
                Remove <img src={deleteIcon} alt="Delete Icon" style={deleteIconStyle} />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={dividerStyle}></div>

          {/* Video 2 */}
          <div style={videoContainerStyle}>
            <img src={thumbnail} alt="Thumbnail" style={{ width: '120px', height: '80px' }} />
            <div style={videoInfoStyle}>
              <span style={videoTitleStyle}>Video Title 2</span>
              <span>Duration: 4:15</span>
              <span>Date: 2024-10-11</span>
              <div style={removeButtonStyle} onClick={() => console.log('Remove Video 2')}>
                Remove <img src={deleteIcon} alt="Delete Icon" style={deleteIconStyle} />
              </div>
            </div>
          </div>
        </div>

        {/* Cart summary */}
        <div style={totalContainerStyle}>
          <p style={totalTextStyle}>
            Total<br />Number of videos: 2
          </p>
          <button style={checkoutButtonStyle} onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Back to Search Button */}
      <div style={{ textAlign: 'right' }}>
        <button style={backButtonStyle} onClick={handleBackToSearch}>
          Back to Search
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
