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

const AppRoutes: FC = () => (
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
    <Route
      path="/settings"
      element={
        <ProtectedRoute>
          <UserSettings />
        </ProtectedRoute>
      }
    />
    <Route path="/not-found" element={<NotFound />} />
    <Route path="*" element={<Navigate to="/login" />} />
  </Routes>
);

export default AppRoutes;
