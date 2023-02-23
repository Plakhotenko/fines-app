import axios from 'axios';
import authInterceptor from './interceptors';

const { REACT_APP_API_URL: baseURL } = process.env;

const client = axios.create({
  baseURL,
});

client.interceptors.request.use(authInterceptor);

export default client;
