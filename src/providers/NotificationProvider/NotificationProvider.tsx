import React, { FC, createContext, useState, useMemo } from 'react';

export const NotificationContext = createContext<{
  notificationText: string;
  showNotification: (t: string) => void;
}>({} as any);

NotificationContext.displayName = 'NotificationProvider';

const NotificationProvider: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  const [notificationText, setNotificationShown] = useState('');

  const showNotification = (errorText: string) => setNotificationShown(errorText);

  const providerValue = useMemo(() => ({ notificationText, showNotification }), [notificationText]);

  return (
    <NotificationContext.Provider value={providerValue}>{children}</NotificationContext.Provider>
  );
};

export default NotificationProvider;
