import axios from 'axios';
import { onRequest, onRequestError } from './requestInterceptor';
import { onResponse, onResponseError } from './responseInterceptor';
const API = axios.create({
  baseURL: 'http://localhost:5050/api/v1',
  timeout: 120000
});
// API.interceptors.request.use(onRequest, onRequestError);
API.interceptors.response.use(onResponse, onResponseError);
export const getData = (url, config) => {
  return API.get(url, config);
};
export const postData = (url, payload, config) => {
  return API.post(url, payload, config);
};
export const updateData = (url, payload, config) => {
  return API.put(url, payload, config);
};
export const deleteData = (url, config) => {
  return API.delete(url, config);
};
export default API;
