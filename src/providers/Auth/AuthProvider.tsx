import React, { FC, createContext, useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAuth } from '../../models';

interface IAuthProvider {
  user: IAuth | undefined;
  logIn: (user: IAuth) => void;
  logOut: () => void;
  isLoggedIn: boolean;
  updateUserEmail: (email: IAuth['email']) => void;
}

export const AuthContext = createContext<IAuthProvider>({} as any);
AuthContext.displayName = 'Auth';

const useAuthHook = () => {
  const userRaw = localStorage.getItem('user');
  const cachedUser = userRaw && JSON.parse(userRaw);

  const navigate = useNavigate();
  const [user, setUser] = useState<IAuth | undefined>(cachedUser);
  const [isLoggedIn, setLoggedIn] = useState(!!cachedUser);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const logIn = (user: IAuth) => {
    setUser(user);
    setLoggedIn(true);
    navigate('/dashboard');
  };

  const logOut = () => {
    setUser(undefined);
    setLoggedIn(false);
    navigate('/login');
  };

  const updateUserEmail = (email: IAuth['email']) => {
    setUser((user) => user && { ...user, email });
  };

  return { user, logOut, logIn, isLoggedIn, updateUserEmail };
};

const AuthProvider: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  const { user, logOut, logIn, isLoggedIn, updateUserEmail } = useAuthHook();
  const providerValue = useMemo(() => ({ user, logOut, logIn, isLoggedIn, updateUserEmail }), [
    user,
    isLoggedIn,
    logOut,
    logIn,
    updateUserEmail,
  ]);
  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
