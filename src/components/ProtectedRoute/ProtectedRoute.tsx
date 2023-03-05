import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import { APP_ROUTES } from '../../constants';
import { UserRole } from '../../models';

const ProtectedRoute: FC<{ children: JSX.Element; isAdminRoute?: boolean }> = ({
  children,
  isAdminRoute,
}) => {
  const { pathname } = useLocation();
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to={APP_ROUTES.LOGIN} />;
  }

  if (isAdminRoute && user?.role === UserRole.USER) {
    return <Navigate to={APP_ROUTES.DASHBOARD} />;
  }

  if (pathname === APP_ROUTES.DASHBOARD && user?.role === UserRole.ADMIN) {
    return <Navigate to={APP_ROUTES.ADMIN_DASHBOARD} />;
  }

  return children;
};

export default ProtectedRoute;
