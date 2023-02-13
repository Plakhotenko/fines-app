import React, { FC, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { LoadingButton as Button } from '@mui/lab';
import { Formik, Form, FormikHelpers } from 'formik';
import { AxiosResponse } from 'axios';
import Input from '../../components/Input';
import useValidationSchema from './validation-schema';
import Translate from '../../components/Translate';
import { useTranslate } from '../../providers/I18n';
import { IUser } from '../../models';
import { useAuth } from '../../providers/Auth';
import { auth } from '../../services';

interface IFormValue {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const useRegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const validationSchema = useValidationSchema();
  const t = useTranslate();
  const { logIn } = useAuth();

  const handleSubmit = (formValue: IFormValue, { setFieldError }: FormikHelpers<IFormValue>) => {
    setLoading(true);
    auth
      .register(formValue)
      .then(() => {
        const { email, password } = formValue;
        auth.login({ email, password }).then(({ data: user }: AxiosResponse<IUser>) => {
          logIn(user);
        });
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

const RegistrationForm: FC = () => {
  const { loading, handleSubmit, t, validationSchema } = useRegistrationForm();

  return (
    <Box sx={{ maxWidth: '500px', mx: 'auto', py: '40px', px: '16px' }}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <Typography variant="h5" component="h1" mb={2} sx={{ textAlign: 'center' }}>
            <Translate t="registrationForm.title" />
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', mb: '16px' }}>
            <Input name="name" label={t('registrationForm.name')} />
            <Input name="email" label={t('registrationForm.email')} />
            <Input name="password" label={t('registrationForm.password')} type="password" />
            <Input
              name="confirmPassword"
              label={t('registrationForm.confirmPassword')}
              type="password"
            />
          </Box>
          <Button variant="contained" sx={{ width: '100%' }} type="submit" loading={loading}>
            <Translate t="registrationForm.submit" />
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default RegistrationForm;
