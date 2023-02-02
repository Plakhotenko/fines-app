import React, { FC, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/auth';

const ProtectedRoute: FC<{ children: JSX.Element; isAdminRoute?: boolean }> = ({
  children,
  isAdminRoute,
}) => {
  const { pathname } = useLocation();
  const { user } = useContext(AuthContext);

  if (!user?.token) {
    return <Navigate to="/login" />;
  }

  if (isAdminRoute && user?.role === 'user') {
    return <Navigate to="/dashboard" />;
  }

  if (pathname === '/dashboard' && user?.role === 'admin') {
    return <Navigate to="/admin-dashboard" />;
  }

  return children;
};

export default ProtectedRoute;
