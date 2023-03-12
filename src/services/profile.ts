import client from '../client';
import { API_ROUTES } from '../constants';

export const updateEmail = (data: { email: string }) =>
  client.patch(API_ROUTES.PROFILE.EMAIL, data);

export const updatePassword = (data: { oldPassword: string; password: string }) =>
  client.patch(API_ROUTES.PROFILE.PASSWORD, data);
