import { Reducer } from 'redux';
import { IAuth } from '../../models';
import { UserActionTypes } from './actions';

interface IUserState {
  isLoading: boolean;
  data?: IAuth;
}

const initialState = {
  isLoading: false,
};

export const user: Reducer<IUserState> = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SET_LOADING:
      return { ...state, isLoading: action.isLoading };
    case UserActionTypes.SET_AUTH:
      return { ...state, data: action.data };
    case UserActionTypes.LOG_OUT:
      return { ...state, data: undefined };
    case UserActionTypes.UPDATE_EMAIL:
      return { ...state, data: { ...state.data, email: action.email } };
    default:
      return state;
  }
};
