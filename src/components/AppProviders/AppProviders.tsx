import React, { FC } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../store';
import NotificationProvider from '../../providers/NotificationProvider';
import NotificationBar from '../NotificationBar';
import I18nProvider from '../../providers/I18n';
import AuthProvider from '../../providers/Auth';

const AppProviders: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <NotificationProvider>
          <NotificationBar />
          <I18nProvider>
            <BrowserRouter>
              <AuthProvider>{children}</AuthProvider>
            </BrowserRouter>
          </I18nProvider>
        </NotificationProvider>
      </LocalizationProvider>
    </PersistGate>
  </Provider>
);
export default AppProviders;
