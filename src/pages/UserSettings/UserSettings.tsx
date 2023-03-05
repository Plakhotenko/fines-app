import React, { FC } from 'react';
import { Container, Stack } from '@mui/material';
import UpdatePasswordForm from '../../components/UpdatePasswordForm';
import UpdateEmailForm from '../../components/UpdateEmailForm';

const UserSettings: FC = () => (
  <Container maxWidth="sm">
    <Stack spacing={4}>
      <UpdatePasswordForm />
      <UpdateEmailForm />
    </Stack>
  </Container>
);

export default UserSettings;
