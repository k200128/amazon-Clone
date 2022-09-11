import axios from "axios";


const instance = axios.create({
    baseUrl: "//http://localhost:5001/clone-1c1c2/us-central1/api" // the API cloud function URL
});

export default instance;