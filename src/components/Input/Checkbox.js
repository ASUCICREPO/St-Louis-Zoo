import React from 'react';
import uncheckedIcon from '../../assets/icons/CheckboxEmpty.png';
import checkedIcon from '../../assets/icons/CheckboxTicked.png';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <input
        type="checkbox"
        id={`custom-checkbox-${label}`} // Unique ID for each checkbox
        checked={checked}
        onChange={onChange}
        style={{ display: 'none' }}
      />

      <label
        htmlFor={`custom-checkbox-${label}`}
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      >
        <img
          src={checked ? checkedIcon : uncheckedIcon}
          alt="Checkbox"
          style={{
            width: '24px',
            height: '24px',
            marginRight: '8px',
          }}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
