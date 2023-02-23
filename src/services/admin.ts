import client from '../client';
import { IUser } from '../models';

export const getUsers = (search?: string) =>
  client.get<IUser[]>('/users', { ...(search && { params: { search } }) });

export const createFine = (data: {
  userId: IUser['id'];
  description: string;
  amount: number;
  deadline: string;
}) => client.post('/fine', data);
