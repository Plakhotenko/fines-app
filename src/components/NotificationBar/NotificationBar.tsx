import React, { FC } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useNotification } from '../../providers/NotificationProvider';

const NotificationBar: FC = () => {
  const { notificationText, showNotification } = useNotification();
  const handleClose = () => showNotification('');

  return (
    <Snackbar
      open={!!notificationText}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        {notificationText}
      </Alert>
    </Snackbar>
  );
};

export default NotificationBar;
