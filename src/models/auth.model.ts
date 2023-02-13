export interface IAuth {
  email: string;
  role: 'user' | 'admin';
  token: string;
}
