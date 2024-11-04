// Confirmation.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import checkCircleIcon from '../assets/icons/checkCircle.png';

const Confirmation = () => {
  const navigate = useNavigate();

  const handleBackToSearchClick = () => {
    navigate('/search'); // Navigate back to the search page
  };

  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <img src={checkCircleIcon} alt="Check Circle Icon" width='70px' padding='20px'/>
      <h2 style={{ padding: '20px' }}>Done!</h2>
      <p style={{ padding: '20px' }}>
        Thank you for submitting your request
      </p>
      <p style={{ padding: '20px' }}>
        Your request has been sent to the admin for approval
      </p>
      <p style={{ padding: '20px' }}>
        You will hear back regarding the approval through email used to submit this request
      </p>
      <Button
        variant="contained"
        style={{ backgroundColor: '#FDBD57', color: 'black' }}
        onClick={handleBackToSearchClick}
      >
        Back to search
      </Button>
    </div>
  );
};

export default Confirmation;