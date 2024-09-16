import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_HOST_URL_BACK,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Error in Axios response:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
