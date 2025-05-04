import axios from "axios";

const api = axios.create({
  //   baseURL: 'YOUR_API_BASE_URL', // Replace with your actual base URL
  //   // You can add other default configurations here, like timeouts, headers, etc.
});

// Request interceptor to automatically add the bearer token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Or however you store your token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
