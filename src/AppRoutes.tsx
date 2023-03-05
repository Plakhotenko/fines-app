import { Navigate, Route, Routes } from 'react-router-dom';
import React, { FC } from 'react';
import GuestRoute from './components/GuestRoute';
import LoginForm from './pages/LoginForm';
import RegistrationForm from './pages/RegistrationForm';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';
import UserSettings from './pages/UserSettings';
import { APP_ROUTES } from './constants';

const AppRoutes: FC = () => (
  <Routes>
    <Route
      path={APP_ROUTES.LOGIN}
      element={
        <GuestRoute>
          <LoginForm />
        </GuestRoute>
      }
    />
    <Route
      path={APP_ROUTES.REGISTER}
      element={
        <GuestRoute>
          <RegistrationForm />
        </GuestRoute>
      }
    />
    <Route
      path={APP_ROUTES.DASHBOARD}
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path={APP_ROUTES.ADMIN_DASHBOARD}
      element={
        <ProtectedRoute isAdminRoute>
          <AdminDashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path={APP_ROUTES.SETTINGS}
      element={
        <ProtectedRoute>
          <UserSettings />
        </ProtectedRoute>
      }
    />
    <Route path={APP_ROUTES.NOT_FOUND} element={<NotFound />} />
    <Route path="*" element={<Navigate to={APP_ROUTES.LOGIN} />} />
  </Routes>
);

export default AppRoutes;
