import React from "react";
import VideoContainer from "./components/VideoContainer";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SideNavBar from "./components/SideNavBar";

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <SearchBar />
        <VideoContainer />
      </div>
      <SideNavBar />
    </div>
  );
}

export default App;
