import React from 'react';

const AgeSlider = ({ onAgeChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="age">Select Age Group:</label>
      <input
        type="range"
        className="form-control-range"
        min="0"
        max="100"
        step="10"
        onChange={(e) => onAgeChange(e.target.value)}
      />
    </div>
  );
};

export default AgeSlider;