export interface IUser {
  email: string;
  role: 'user' | 'admin';
  token: string;
}
