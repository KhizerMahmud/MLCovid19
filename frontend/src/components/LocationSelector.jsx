import React from 'react';

const LocationSelector = ({ onSelect }) => {
  const handleChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <div className="form-group">
      <label htmlFor="location">Select Location:</label>
      <select className="form-control" id="location" onChange={handleChange}>
        <option value="">-- Select --</option>
        <option value="USA">USA</option>
        <option value="India">India</option>
        <option value="Brazil">Brazil</option>
        <option value="UK">UK</option>
      </select>
    </div>
  );
};

export default LocationSelector;