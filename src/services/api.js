import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api/',
   methods: ['GET', 'POST', 'PUT', 'DELETE'],

});


// Add response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      // Handle unauthorized access
      console.log('Unauthorized access - redirect to login');
    }
    return Promise.reject(error);
  }
);

export default api;