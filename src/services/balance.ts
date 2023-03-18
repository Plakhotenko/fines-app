import client from '../client';
import { API_ROUTES } from '../constants';

export const getBalance = () => client.get<{ balance: number }>(API_ROUTES.BALANCE.BALANCE);
export const topUpBalance = (amount: number) => client.post(API_ROUTES.BALANCE.TOP_UP, { amount });
