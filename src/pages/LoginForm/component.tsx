import React, { FC, useState, useRef, useContext, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { LoadingButton as Button } from '@mui/lab';
import { Formik, Form, FormikProps } from 'formik';
import { AxiosResponse } from 'axios';
import { useTranslate, LangContext } from '../../providers/I18n';
import Translate from '../../components/Translate';
import Input from '../../components/Input';
import useValidationSchema from './validation-schema';
import client from '../../client';
import { IUser } from '../../models';
import { AuthContext } from '../../providers/Auth';

interface IFormValue {
  email: string;
  password: string;
}

const useLoginForm = () => {
  const formikRef = useRef<FormikProps<IFormValue>>(null);
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState<IFormValue | null>(null);
  const validationSchema = useValidationSchema();
  const { lang } = useContext(LangContext);
  const t = useTranslate();
  const { logIn } = useContext(AuthContext);

  useEffect(() => {
    formikRef.current?.validateForm();
  }, [lang]);

  const handleSubmit = (value: IFormValue) => {
    setFormValue(value);
  };

  useEffect(() => {
    if (!formValue) return;
    setLoading(true);
    client
      .post('/login', formValue)
      .then(({ data: user }: AxiosResponse<IUser>) => {
        logIn(user);
      })
      .catch((error) => {
        const field = error?.response?.data?.field;
        const message = error?.response?.data?.message;
        if (field && message) {
          formikRef?.current?.setFieldError(field, message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [formValue]);

  return { loading, handleSubmit, formikRef, t, validationSchema };
};

const LoginForm: FC = () => {
  const { loading, handleSubmit, formikRef, t, validationSchema } = useLoginForm();

  return (
    <Box sx={{ maxWidth: '500px', mx: 'auto', py: '40px', px: '16px' }}>
      <Formik
        innerRef={formikRef}
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
            {t('loginForm.submit')}
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default LoginForm;
