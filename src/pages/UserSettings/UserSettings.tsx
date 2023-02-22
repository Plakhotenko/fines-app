import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import UpdatePasswordForm from '../../components/UpdatePasswordForm';
import UpdateEmailForm from '../../components/UpdateEmailForm';

const UserSettings: FC = () => (
  <Container maxWidth="sm">
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <UpdatePasswordForm />
      <UpdateEmailForm />
    </Box>
  </Container>
);

export default UserSettings;
