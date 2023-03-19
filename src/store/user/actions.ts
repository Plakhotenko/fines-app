import { IAuth } from '../../models';

export enum UserActionTypes {
  SET_LOADING = 'SET_LOADING',
  SET_AUTH = 'SET_AUTH',
  LOG_OUT = 'LOG_OUT',
  UPDATE_EMAIL = 'UPDATE_EMAIL',
}

export const setLoading = (isLoading = true) => ({
  type: UserActionTypes.SET_LOADING,
  isLoading,
});

export const setAuth = (data: IAuth) => ({
  type: UserActionTypes.SET_AUTH,
  data,
});

export const logOut = () => ({
  type: UserActionTypes.LOG_OUT,
});

export const updateEmail = (email: IAuth['email']) => ({
  type: UserActionTypes.UPDATE_EMAIL,
  email,
});
