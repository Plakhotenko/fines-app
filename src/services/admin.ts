import client from '../client';
import { IUser } from '../models';
import { API_ROUTES } from '../constants';

export const getUsers = (search?: string) =>
  client.get<IUser[]>(API_ROUTES.ADMIN.USERS, { ...(search && { params: { search } }) });

export const createFine = (data: {
  userId: IUser['id'];
  description: string;
  amount: number;
  deadline: string;
}) => client.post(API_ROUTES.ADMIN.FINE, data);
