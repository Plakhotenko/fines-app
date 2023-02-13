import client from '../client';

export const login = (data: { email: string; password: string }) => client.post('/login', data);
export const register = (data: { name: string; email: string; password: string }) =>
  client.post('/register', data);
