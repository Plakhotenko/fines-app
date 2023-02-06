import React, { FC, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../providers/Auth';

const GuestRoute: FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user?.token) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

export default GuestRoute;
