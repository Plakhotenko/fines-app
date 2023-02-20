import { InternalAxiosRequestConfig } from 'axios';

const authInterceptor = (config: InternalAxiosRequestConfig) => {
  const newConfig = config;
  const authRaw = localStorage.getItem('user');

  if (authRaw) {
    const { token } = JSON.parse(authRaw);
    newConfig.headers.token = token;
  }

  return newConfig;
};

export default authInterceptor;
