import axios from "axios";
const youtubeData = axios.create({
  baseURL: "https://picsum.photos/v2/list",
  responseType: "json"
});
export default youtubeData;
