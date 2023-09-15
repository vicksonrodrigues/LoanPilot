import axios from 'axios';

const baseUrl = '/api/applications';
const token = 'abc';

const headers = {
  Authorization: `Bearer ${token}`,
};

const getApplication = async (id) => {
  const request = await axios.get(`${baseUrl}/${id}`, { headers });
  return request.data;
};

const createApplication = async (customerDetails) => {
  const request = await axios.post(baseUrl, customerDetails);
  return request.data;
};

export default { getApplication, createApplication };
