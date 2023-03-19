import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { APP_ROUTES } from '../../constants';
import { UserRole } from '../../models';
import { selectIsLoggedIn, selectUser } from '../../store/user/selectors';

const useProtectedRoute = () => {
  const { pathname } = useLocation();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return { pathname, user, isLoggedIn };
};

const ProtectedRoute: FC<{ children: JSX.Element; isAdminRoute?: boolean }> = ({
  children,
  isAdminRoute,
}) => {
  const { pathname, user, isLoggedIn } = useProtectedRoute();

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
