import React, { FC } from 'react';
import Header from './components/Header';
import AppRoutes from './AppRoutes';
import AppProviders from './components/AppProviders';

const App: FC = () => (
  <AppProviders>
    <Header />
    <AppRoutes />
  </AppProviders>
);

export default App;
