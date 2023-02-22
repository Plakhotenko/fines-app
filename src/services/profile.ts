import client from '../client';

export const updateEmail = (data: { email: string }) => client.patch('/account/email', data);
export const updatePassword = (data: { oldPassword: string; password: string }) =>
  client.patch('/account/password', data);
