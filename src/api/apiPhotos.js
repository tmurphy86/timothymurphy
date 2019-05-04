import axios from "axios";

export default apiPhotos axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 4a0a02f3928d401f46e9ab878bee36c0016e2f308e6bf7531962166b6f28191c"
  }
});
