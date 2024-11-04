import React, { useState } from 'react';
import uncheckedIcon from '../../assets/icons/CheckboxEmpty.png';
import checkedIcon from '../../assets/icons/CheckboxTicked.png';

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      {/* Hidden Checkbox Input */}
      <input
        type="checkbox"
        id={`custom-checkbox-${label}`} // Unique ID for each checkbox
        checked={checked}
        onChange={handleCheckboxChange}
        style={{ display: 'none' }}
      />
      
      {/* Custom Checkbox Icon */}
      <label htmlFor={`custom-checkbox-${label}`} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <img
          src={checked ? checkedIcon : uncheckedIcon}
          alt="Checkbox"
          style={{
            width: '24px',
            height: '24px',
            marginRight: '8px',
          }}
        />
        {/* Text Label */}
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
