import React from "react";

function Search(props) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={props.searchTerm}
      onChange={(e) => props.setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
