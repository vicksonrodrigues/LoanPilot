import axios from 'axios';

const baseUrl = '/api/auth';

const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};
const logout = async () => {
  const response = await axios.post(`${baseUrl}/logout`);
  return response.data;
};

const refresh = async () => {
  const response = await axios.get(`${baseUrl}/refresh`);
  return response.data;
};

export default { login, logout, refresh };
