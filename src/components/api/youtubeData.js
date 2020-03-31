import axios from "axios";
const youtubeData = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    Key: "AIzaSyBn3n9csJUUxo5e9q7dXa5DBFzkbkNego0"
  }
});
export default youtubeData;
