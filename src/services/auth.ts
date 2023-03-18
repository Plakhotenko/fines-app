import client from '../client';
import { IAuth } from '../models';
import { API_ROUTES } from '../constants';

export const login = (data: { email: string; password: string }) =>
  client.post<IAuth>(API_ROUTES.AUTH.LOGIN, data);
export const register = (data: { name: string; email: string; password: string }) =>
  client.post(API_ROUTES.AUTH.REGISTER, data);
