import React from 'react';
// Styling

const SearchBar = ({ setQuery, query }) => {
  return (
    <input
      className="searchBar"
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      placeholder="Search for a cookie name"
    />
  );
};

export default SearchBar;
