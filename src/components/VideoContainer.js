import React, { useEffect } from "react";
import "../components/VideoContainer";
// import youtubeData from "./api/youtubeData";

function VideoContainer() {
  return (
    <div className="card">
      <div className="container">
        <iframe
          title="video"
          className="player"
          type="text/html"
          width="200px"
          height="200px"
          src="https://www.youtube.com/embed/VPVzx1ZOVuw"
          frameBorder="0"
        />
      </div>
    </div>
  );
}
export default VideoContainer;
