import axios from "axios";

const Api = axios.create({
  baseURL: "https://bti.id/services/btiportalcorems/api/",
  headers: {
    accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});

export default Api;
