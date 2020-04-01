import React from "react";
import "../components/searchbar.css";
function SearchBar() {
  return (
    <div className="searchbar">
      <input
        className="searchInput"
        type="text"
        placeholder="Search..."
      ></input>
      <div className="dropdown">
        <button className="dropbtn">
          Category &nbsp;
          <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
        </button>
        <div className="dropdown-content">
          <a href="/#">Sports</a>
          <a href="/#">Entertainment</a>
          <a href="/#">News</a>
          <a href="/#">Gaming</a>
          <a href="/#">Fashion</a>
          <a href="/#">Travel</a>
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
