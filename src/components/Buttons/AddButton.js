// AddButton.js
import React from 'react';
import addIcon from '../../assets/icons/addCart.png';

const AddButton = ({ onClick }) => {
  return (
    <button
      style={{
        backgroundColor: '#FDBD57',
        border: 'none',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <img
        src={addIcon}
        alt="Add to cart"
        style={{ width: '20px', height: '20px', marginRight: '8px' }}
      />
      Add
    </button>
  );
};

export default AddButton;
