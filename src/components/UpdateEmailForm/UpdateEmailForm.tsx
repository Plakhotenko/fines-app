import React, { FC, useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { Box } from '@mui/material';
import { LoadingButton as Button } from '@mui/lab';
import * as yup from 'yup';
import Input from '../Input';
import { profile } from '../../services';
import { useAuth } from '../../providers/Auth';
import { useNotification } from '../../providers/NotificationProvider';
import Translate from '../Translate';

interface IFormValue {
  email: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().email().min(6).max(40).required(),
});

const useUpdateEmailForm = () => {
  const [loading, setLoading] = useState(false);
  const { user, updateUserEmail } = useAuth();
  const { showNotification } = useNotification();
  const handleSubmit = (value: IFormValue, { setFieldError }: FormikHelpers<IFormValue>) => {
    setLoading(true);
    profile
      .updateEmail(value)
      .then(() => {
        updateUserEmail(value.email);
        showNotification('Email successfully updated');
      })
      .catch((error) => {
        const message = error?.response?.data?.message;
        if (message) {
          setFieldError('email', message);
        }
      })
      .finally(() => setLoading(false));
  };
  return { loading, user, handleSubmit };
};

const UpdateEmailForm: FC = () => {
  const { loading, user, handleSubmit } = useUpdateEmailForm();

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      initialValues={{
        email: user?.email || '',
      }}
    >
      <Form>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input name="email" label="Email" />
          <Button variant="contained" type="submit" loading={loading}>
            <Translate t="updateEmailForm.submit" />
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default UpdateEmailForm;
