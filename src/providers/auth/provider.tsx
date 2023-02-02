import React, { FC, createContext, useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../models';

interface IAuthProvider {
  user: IUser | undefined;
  logIn: (user: IUser) => void;
  logOut: () => void;
}

export const AuthContext = createContext<IAuthProvider>({} as any);
AuthContext.displayName = 'Auth';

const useAuth = () => {
  const userRaw = localStorage.getItem('user');
  const cachedUser = userRaw && JSON.parse(userRaw);

  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | undefined>(cachedUser);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const logIn = (user: IUser) => {
    setUser(user);
    navigate('/dashboard');
  };

  const logOut = () => {
    setUser(undefined);
    navigate('/login');
  };

  return { user, logOut, logIn };
};

const AuthProvider: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  const { user, logOut, logIn } = useAuth();
  const providerValue = useMemo(() => ({ user, logOut, logIn }), [user]);
  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
