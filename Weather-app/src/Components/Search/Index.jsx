import React from "react";

export const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="Search-engine">
      <input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="Search-btn" onClick={handleSearch}>
        Search 
      </button>
    </div>
  );
};
