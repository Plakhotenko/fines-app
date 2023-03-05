export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

export interface IAuth {
  email: string;
  role: UserRole;
  token: string;
}
