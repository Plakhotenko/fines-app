import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import I18nProvider from './providers/I18n';
import AuthProvider from './providers/Auth';
import AppRoutes from './AppRoutes';

const App: FC = () => (
  <I18nProvider>
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  </I18nProvider>
);

export default App;
