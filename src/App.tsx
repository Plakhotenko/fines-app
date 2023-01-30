import React, { FC } from 'react';
import Header from './components/header';
import RegistrationForm from './components/registration-form';
import I18nProvider from './providers/i18n';

const App: FC = () => (
  <I18nProvider>
    <Header />
    <RegistrationForm />
  </I18nProvider>
);

export default App;
