import React, { FC, createContext, useState, useMemo } from 'react';

const initialContextValue = {
  notificationText: '',
  showNotification: () => {},
};

export const NotificationContext = createContext<{
  notificationText: string;
  showNotification: (t: string) => void;
}>(initialContextValue);

NotificationContext.displayName = 'NotificationProvider';

const NotificationProvider: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  const [notificationText, setNotificationShown] = useState('');

  const showNotification = (notificationText: string) => setNotificationShown(notificationText);

  const providerValue = useMemo(() => ({ notificationText, showNotification }), [notificationText]);

  return (
    <NotificationContext.Provider value={providerValue}>{children}</NotificationContext.Provider>
  );
};

export default NotificationProvider;
