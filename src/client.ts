import axios from 'axios';

const { REACT_APP_API_URL: baseURL } = process.env;

const client = axios.create({
  baseURL,
});

export default client;
