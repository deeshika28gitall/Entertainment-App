import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(AppContext);

  return (
    <input
      type="text"
      placeholder="Search movies or series..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '10px',
        width: '100%',
        margin: '20px 0',
        fontSize: '16px',
        borderRadius: '5px'
      }}
    />
  );
};

export default SearchBar;
