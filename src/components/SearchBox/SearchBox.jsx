import React from "react";
  

const SearchBox = ({ filter, onFilterChange }) => {
      return (
        <div>
          <input
            type="text"
            placeholder="Search contacts..."
            value={filter}
            onChange={onFilterChange}
          />
        </div>
      ); 
}
export default SearchBox;


