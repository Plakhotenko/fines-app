import client from '../client';
import { IAuth } from '../models';

export const login = (data: { email: string; password: string }) =>
  client.post<IAuth>('/login', data);
export const register = (data: { name: string; email: string; password: string }) =>
  client.post('/register', data);
