import client from '../client';
import { IUser } from '../models';

export const users = (search?: string) =>
  client.get<IUser[]>('/users', { ...(search && { params: { search } }) });

export const fine = (data: {
  userId: IUser['id'];
  description: string;
  amount: number;
  deadline: string;
}) => client.post('/fine', data);
