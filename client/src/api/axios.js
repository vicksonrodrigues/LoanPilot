import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

// for public route
export default axios.create({
  baseURL: BASE_URL,
});

// for private route
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
