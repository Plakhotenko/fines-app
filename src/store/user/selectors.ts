import { createSelector } from 'reselect';
import { RootState } from '../index';

const selectUserSlice = (state: RootState) => state.user;

export const selectUserIsLoading = createSelector(selectUserSlice, (user) => user.isLoading);
export const selectUser = createSelector(selectUserSlice, (user) => user.data);
export const selectIsLoggedIn = createSelector(selectUser, (user) => !!user);
