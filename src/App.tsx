import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Header from './components/Header';
import I18nProvider from './providers/I18n';
import AuthProvider from './providers/Auth';
import AppRoutes from './AppRoutes';
import NotificationProvider from './providers/NotificationProvider';
import NotificationBar from './components/NotificationBar';

const App: FC = () => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <NotificationProvider>
      <NotificationBar />
      <I18nProvider>
        <BrowserRouter>
          <AuthProvider>
            <Header />
            <AppRoutes />
          </AuthProvider>
        </BrowserRouter>
      </I18nProvider>
    </NotificationProvider>
  </LocalizationProvider>
);

export default App;
