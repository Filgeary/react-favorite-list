import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
  return (
    <input
      type="text"
      className="form-control search-input"
      name="search-panel"
      placeholder="Find by Records"
    />
  );
};

export default SearchPanel;
