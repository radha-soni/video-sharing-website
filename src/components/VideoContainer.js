import React, { useEffect, useState } from "react";
import "./videoContainer.css";
import youtubeData from "./api/youtubeData";
function VideoContainer() {
  const [data, setData] = useState();
  const [resizedData, setResizedData] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await youtubeData.get("/");
      setData(result.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const resizedUrl = data.map(url =>
        url.download_url.slice(0, -9).concat("280/200")
      );
      console.log(resizedData);
      setResizedData(resizedUrl);
    }
  }, [data]);
  return (
    <div className="card">
      {resizedData ? (
        resizedData.map(img => (
          <div className="imgcontainer" key={img}>
            <img src={img} alt="pic" />
            <p className="videotitle">working on a computer</p>
            <p>Channel name</p>
            <div className="rating">
              user rating &nbsp;
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
        ))
      ) : (
        <div className="loadercontainer">
          <div className="loader"></div>
          <h4>Loading</h4>
        </div>
      )}
    </div>
  );
}
export default VideoContainer;
