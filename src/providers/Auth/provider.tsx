import React, { FC, createContext, useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../models';

interface IAuthProvider {
  user: IUser | undefined;
  logIn: (user: IUser) => void;
  logOut: () => void;
  isLoggedIn: boolean;
}

export const AuthContext = createContext<IAuthProvider>({} as any);
AuthContext.displayName = 'Auth';

const useAuthHook = () => {
  const userRaw = localStorage.getItem('user');
  const cachedUser = userRaw && JSON.parse(userRaw);

  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | undefined>(cachedUser);
  const [isLoggedIn, setLoggedIn] = useState(!!cachedUser);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const logIn = (user: IUser) => {
    setUser(user);
    setLoggedIn(true);
    navigate('/dashboard');
  };

  const logOut = () => {
    setUser(undefined);
    setLoggedIn(false);
    navigate('/login');
  };

  return { user, logOut, logIn, isLoggedIn };
};

const AuthProvider: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  const { user, logOut, logIn, isLoggedIn } = useAuthHook();
  const providerValue = useMemo(() => ({ user, logOut, logIn, isLoggedIn }), [user, isLoggedIn]);
  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
