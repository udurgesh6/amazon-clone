import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-clone-df4c3.cloudfunctions.net/api", //The api cloud function URL
  //"http://localhost:5001/clone-df4c3/us-central1/api"
});

export default instance;
//
