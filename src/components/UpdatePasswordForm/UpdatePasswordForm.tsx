import React, { FC, useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { LoadingButton as Button } from '@mui/lab';
import { Box } from '@mui/material';
import * as yup from 'yup';
import Input from '../Input';
import { profile } from '../../services';
import { useNotification } from '../../providers/NotificationProvider';
import Translate from '../Translate';

interface IFormValue {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = yup.object().shape({
  oldPassword: yup.string().required(),
  password: yup.string().min(8).max(50).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must match')
    .required(),
});

const useUpdatePasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const { showNotification } = useNotification();
  const handleSubmit = (
    value: IFormValue,
    { setFieldError, resetForm }: FormikHelpers<IFormValue>
  ) => {
    setLoading(true);
    profile
      .updatePassword(value)
      .then(() => {
        resetForm();
        showNotification('Password successfully updated');
      })
      .catch((error) => {
        const message = error?.response?.data?.message;
        if (message) {
          setFieldError('password', message);
        }
      })
      .finally(() => setLoading(false));
  };

  return { handleSubmit, loading };
};

const UpdatePasswordForm: FC = () => {
  const { handleSubmit, loading } = useUpdatePasswordForm();

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        oldPassword: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input name="oldPassword" label="Old password" type="password" />
          <Input name="password" label="New password" type="password" />
          <Input name="confirmPassword" label="Confirm new password" type="password" />
          <Button variant="contained" type="submit" loading={loading}>
            <Translate t="updatePasswordForm.submit" />
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default UpdatePasswordForm;
