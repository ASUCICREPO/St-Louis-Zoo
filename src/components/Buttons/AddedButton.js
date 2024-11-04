// AddedButton.js
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import deleteIcon from '../../assets/icons/Delete.png';

const AddedButton = ({ onClick }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        style={{
          backgroundColor: '#4CAF50',
          border: 'none',
          padding: '8px 16px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '5px',
        }}
      >
        <CheckCircleIcon style={{ marginRight: '8px' }} />
        Added
      </button>
      <img
        src={deleteIcon}
        alt="Delete"
        style={{
          width: '20px',
          height: '20px',
          marginLeft: '12px',
          cursor: 'pointer',
        }}
      />
    </div>
  );
};

export default AddedButton;
