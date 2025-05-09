import axios from 'axios'
import { jwtDecode } from 'jwt-decode';

const apiUrl = "https://cryptobloom-server.onrender.com";
// const apiUrl = "http://127.0.0.1:8000/";
// const apiUrl = "https://binarybloom-72gd.onrender.com"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem("ACCESSTOKEN");

    if (token) {
      const decoded = jwtDecode (token)
      const tokenExpiration = decoded.exp  
      const now = Math.floor(Date.now() / 1000)
      
      if(tokenExpiration! >= now ) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers["Content-Type"] = 'application/json';
      }
    }
    
    return config;
  }, error => Promise.reject(error)
);

export default api;