import axios from 'axios';

const { REACT_APP_API_URL: baseURL } = process.env;

const client = axios.create({
  baseURL,
});

client.interceptors.request.use((config) => {
  const newConfig = config;
  const authRaw = localStorage.getItem('user');

  if (authRaw) {
    const { token } = JSON.parse(authRaw);
    newConfig.headers.token = token;
  }

  return newConfig;
});

export default client;
