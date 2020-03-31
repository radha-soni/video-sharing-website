import React from "react";
import "../components/searchbar.css";
function SearchBar() {
  return (
    <div className="searchbar">
      <input className="searchInput" type="text" placeholder="Search.."></input>
    </div>
  );
}
export default SearchBar;
