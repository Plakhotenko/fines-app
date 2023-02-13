import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';

const GuestRoute: FC<{ children: JSX.Element }> = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

export default GuestRoute;
