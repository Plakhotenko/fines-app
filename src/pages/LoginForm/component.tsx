import React, { FC, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { LoadingButton as Button } from '@mui/lab';
import { Formik, Form, FormikHelpers } from 'formik';
import { AxiosResponse } from 'axios';
import { useTranslate } from '../../providers/I18n';
import Translate from '../../components/Translate';
import Input from '../../components/Input';
import useValidationSchema from './validation-schema';
import { IUser } from '../../models';
import { useAuth } from '../../providers/Auth';
import { auth } from '../../services';

interface IFormValue {
  email: string;
  password: string;
}

const useLoginForm = () => {
  const [loading, setLoading] = useState(false);
  const validationSchema = useValidationSchema();
  const t = useTranslate();
  const { logIn } = useAuth();

  const handleSubmit = (formValue: IFormValue, { setFieldError }: FormikHelpers<IFormValue>) => {
    setLoading(true);
    auth
      .login(formValue)
      .then(({ data: user }: AxiosResponse<IUser>) => {
        logIn(user);
      })
      .catch((error) => {
        const field = error?.response?.data?.field;
        const message = error?.response?.data?.message;
        if (field && message) {
          setFieldError(field, message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, handleSubmit, t, validationSchema };
};

const LoginForm: FC = () => {
  const { loading, handleSubmit, t, validationSchema } = useLoginForm();

  return (
    <Box sx={{ maxWidth: '500px', mx: 'auto', py: '40px', px: '16px' }}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <Typography variant="h5" component="h1" mb={2} sx={{ textAlign: 'center' }}>
            <Translate t="loginForm.title" />
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', mb: '16px' }}>
            <Input name="email" label={t('loginForm.email')} />
            <Input name="password" label={t('loginForm.password')} type="password" />
          </Box>
          <Button variant="contained" sx={{ width: '100%' }} type="submit" loading={loading}>
            <Translate t="loginForm.submit" />
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default LoginForm;
