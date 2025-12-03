import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import Cookies from 'js-cookie';

// Base URL for API requests

// Create an Axios instance with default configuration

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to dynamically set Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from cookies
    const token = Cookies.get('mo_access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle errors globally here
    if (error.response) {
      console.error('API Error:', error.response.data);
      switch (error.response.status) {
        case 401:
          console.error('Unauthorized access - triggering logout');
          // Emit a custom event that the AuthProvider can listen to
          window.dispatchEvent(new CustomEvent('auth:unauthorized'));
          // Clear the token immediately
          // Remove both tokens on unauthorized to ensure clean state
          Cookies.remove('access_token');
          Cookies.remove('mo_access_token');
          break;
        case 403:
          console.error('Forbidden - insufficient permissions');
          // Also trigger logout for 403 as it often means token is invalid
          window.dispatchEvent(new CustomEvent('auth:unauthorized'));
          Cookies.remove('access_token');
          Cookies.remove('mo_access_token');
          break;
        case 500:
          console.error('Server error - try again later');
          break;
        default:
          console.error('An unknown error occurred');
      }
    } else {
      console.error('Network error or no response');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
