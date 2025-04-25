import axios from 'axios'

const apiUrl = "https://cryptobloom-server.onrender.com";
// const apiUrl = "http:127.0.0.1:8080";
// const apiUrl = "https://steelfinanceapi.onrender.com"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem("ACCESSTOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["Content-Type"] = 'application/json';
    }
    return config;
  }, error => Promise.reject(error)
);

export default api;