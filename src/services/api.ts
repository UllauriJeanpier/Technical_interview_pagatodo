import axios from 'axios';
import {URLS} from '../utils/constants';

const serviceApi = axios.create({
  baseURL: URLS.BASE,
  headers: {
    Accept: 'application/json',
  },
  timeout: 5000,
});

serviceApi.interceptors.response.use(
  async response => response,
  async error => {
    if (error.response) {
      return Promise.reject({
        code: error.code,
        message: error.message,
      });
    }
  },
);

export default serviceApi;
