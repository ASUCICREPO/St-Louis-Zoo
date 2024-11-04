import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import thumbnailImage from '../assets/images/logo/thumbnail.png'; // Replace with your actual thumbnail image path

const TagDetails = () => {
  // State for tracking the current page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4; // Define total number of pages

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: '20px',
    height: '100vh', // Full height of the viewport
  };

  const leftColumnStyle = {
    width: '25%', // 25% width for the left column
    padding: '20px',
    backgroundColor: '#FFF', // Light gray background for both columns
    borderRadius: '10px',
  };

  const rightColumnStyle = {
    width: '70%', // 70% width for the right column
    padding: '20px',
    backgroundColor: '#EEECE5', // Light gray background for both columns
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const thumbnailStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '20px',
  };

  const titleStyle = {
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    marginBottom: '20px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 'auto',
  };

  const backButtonStyle = {
    backgroundColor: '#FFF', // White background
    color: '#000', // Black text
    border: '1px solid #000',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  const adminLoginButtonStyle = {
    backgroundColor: '#FDBD57', // Yellow background
    color: '#FFF', // White text
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  const navContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const navButtonStyle = {
    cursor: 'pointer',
    marginLeft: '15px', // Increase space between page numbers
    fontWeight: 'bold',
    color: '#666',
    textDecoration: 'none',
  };

  const currentPageStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  const pageContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    // marginTop: '20px',
  };

  const pageColumnStyle = {
    width: '48%', // Two equal columns
    backgroundColor: '#EEECE5', // Same background for both columns
    padding: '20px',
    borderRadius: '10px',
    boxShadow: 'none', // Remove shadow
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingBottom: '10px', // Reduced padding for smaller header height
  };

  return (
    <div style={containerStyle}>
      {/* Left Column - Video Details */}
      <div style={leftColumnStyle}>
        <h2 style={titleStyle}>Video Details</h2>
        
        {/* Thumbnail */}
        <img src={thumbnailImage} alt="Thumbnail" style={thumbnailStyle} />
        
        {/* Title */}
        <h3 style={titleStyle}>Title</h3>
        <p>This is the video title.</p>
        
        {/* Description */}
        <h3 style={titleStyle}>Description</h3>
        <p style={descriptionStyle}>This is the description of the video.</p>
        
        {/* Buttons */}
        <div style={buttonContainerStyle}>
          <button style={backButtonStyle}>Back</button>
          <button style={adminLoginButtonStyle}>Admin Login</button>
        </div>
      </div>

      {/* Right Column - Tag Information with Pagination */}
      <div style={rightColumnStyle}>
        {/* Header with Title and Navigation */}
        <div style={headerStyle}>
          <h2 style={{ ...titleStyle, textDecoration: 'underline' }}>Tag Information</h2>

          {/* Page Navigation */}
          <div style={navContainerStyle}>
            <span style={{ marginRight: '10px' }}>Page:</span>
            {[...Array(totalPages)].map((_, index) => (
              <span
                key={index}
                style={currentPage === index + 1 ? currentPageStyle : navButtonStyle}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </span>
            ))}
          </div>
        </div>

        {/* Divider between header and body */}
        <Divider variant="middle" />

        {/* Page Content - Two columns with vertical divider */}
        <div style={pageContentStyle}>
          {/* Left Column */}
          <div style={pageColumnStyle}>
            <p>This is the left column content for Page {currentPage}.</p>
          </div>

          {/* Vertical Divider */}
          <Divider orientation="vertical" flexItem />

          {/* Right Column */}
          <div style={pageColumnStyle}>
            <p>This is the right column content for Page {currentPage}.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagDetails;
