import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../store/user/selectors';

const GuestRoute: FC<{ children: JSX.Element }> = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

export default GuestRoute;
