import axios from 'axios';
بخصائص افتراضية
const api = axios.create({
  baseURL: 'https://ecommerce.routemisr.com/api/v1',
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    if (error.response?.status === 401) {
      localStorage.removeItem('userToken');

    }
    return Promise.reject(error);
  }
);

export default api;
