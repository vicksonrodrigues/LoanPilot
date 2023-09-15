import axios from '../api/axios';

const baseUrl = '/api/customers';

const getCustomer = async (id) => {
  const request = await axios.get(`${baseUrl}/${id}`);
  return request.data;
};

const addNewCustomer = async (customerDetails) => {
  const request = await axios.post(baseUrl, customerDetails);
  return request.data;
};

export default { getCustomer, addNewCustomer };
