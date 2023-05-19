import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { user } from './user/reducer';

const persistConfig = {
  version: 1,
  key: 'root',
  storage,
};

const reducers = combineReducers({
  user,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
