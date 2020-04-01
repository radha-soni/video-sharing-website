import React from "react";
import "../components/sideNavBar.css";
function SideNavBar() {
  return (
    <div className="sidenavContainer">
      <div>
        <img
          className="logo"
          alt="logo"
          src="https://www.travelmag.com/wp-content/uploads/2017/12/Headout-logo.png"
        />
      </div>

      <a href="/#">
        <span className="iconhandler">
          <i className="fa fa-fw fa-home"></i>
        </span>
        Home
      </a>

      <a href="/#">
        <span className="iconhandler">
          <i className="fa fa-fw fa-fire"></i>
        </span>
        Trending
      </a>

      <a href="/#">
        <span className="iconhandler">
          <i className="fa fa-fw fa-wrench"></i>
        </span>
        Settings
      </a>

      <a href="/#">
        <span className="iconhandler">
          <i className="fa fa-fw fa-info-circle"></i>
        </span>
        Help
      </a>

      <a href="/#">
        <span className="iconhandler">
          <i className="fa fa-comment"></i>
        </span>
        Feedback
      </a>

      <button className="signinbtn">
        <span className="btnicon">
          <i className="fa fa-user"></i>
        </span>
        Sign In
      </button>
    </div>
  );
}
export default SideNavBar;
