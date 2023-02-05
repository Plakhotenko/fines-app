import React, { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header';
import RegistrationForm from './components/registration-form';
import I18nProvider from './providers/i18n';
import LoginForm from './components/login-form';
import Dashboard from './components/dashboard';
import NotFound from './components/not-found';
import ProtectedRoute from './components/protected-route';
import GuestRoute from './components/guest-route';
import AdminDashboard from './components/admin-dashboard';
import AuthProvider from './providers/auth';

const App: FC = () => (
  <I18nProvider>
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route
            path="/login"
            element={
              <GuestRoute>
                <LoginForm />
              </GuestRoute>
            }
          />
          <Route
            path="/register"
            element={
              <GuestRoute>
                <RegistrationForm />
              </GuestRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute isAdminRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </I18nProvider>
);

export default App;
