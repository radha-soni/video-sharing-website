import React from "react";
import "../components/sideNavBar.css";
function SideNavBar() {
  return (
    <div className="sidenavContainer">
      <div>
        <img
          className="logo"
          src="https://www.travelmag.com/wp-content/uploads/2017/12/Headout-logo.png"
        />
      </div>
      <div className="sidenavlinks">
        <a href="/#">
          <span className="iconhandler">
            <i className="fa fa-fw fa-home"></i>
          </span>
          Home
        </a>
      </div>
      <div className="sidenavlinks">
        <a href="/#">
          <span className="iconhandler">
            <i className="fa fa-fw fa-fire"></i>
          </span>
          Trending
        </a>
      </div>
      <div className="sidenavlinks">
        <a href="/#">
          <span className="iconhandler">
            <i className="fa fa-fw fa-wrench"></i>
          </span>
          Settings
        </a>
      </div>
      <div className="sidenavlinks">
        <a href="/#">
          <span className="iconhandler">
            <i className="fa fa-fw fa-info-circle"></i>
          </span>
          Help
        </a>
      </div>
      <div className="sidenavlinks">
        <a href="/#">
          <span className="iconhandler">
            <i className="fa fa-comment"></i>
          </span>
          Feedback
        </a>
      </div>
    </div>
  );
}
export default SideNavBar;
