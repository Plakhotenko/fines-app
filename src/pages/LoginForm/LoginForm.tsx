import React, { FC } from 'react';
import { Typography, Box } from '@mui/material';
import { LoadingButton as Button } from '@mui/lab';
import { Formik, Form, FormikHelpers } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslate } from '../../providers/I18n';
import Translate from '../../components/Translate';
import Input from '../../components/Input';
import useValidationSchema from './validation-schema';
import { loginUserThunk } from '../../store/user/thunk';
import { ILoginFormValue } from './login-form.model';
import { selectUserIsLoading } from '../../store/user/selectors';

const useLoginForm = () => {
  const validationSchema = useValidationSchema();
  const t = useTranslate();
  const loading = useSelector(selectUserIsLoading);
  const dispatch = useDispatch();

  const handleSubmit = (
    formValue: ILoginFormValue,
    formikHelpers: FormikHelpers<ILoginFormValue>
  ) => {
    dispatch(loginUserThunk(formValue, formikHelpers));
  };

  return { loading, t, validationSchema, handleSubmit };
};

const LoginForm: FC = () => {
  const { loading, t, validationSchema, handleSubmit } = useLoginForm();

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
