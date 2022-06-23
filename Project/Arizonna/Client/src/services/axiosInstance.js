import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:1243" });

export default axiosInstance;
