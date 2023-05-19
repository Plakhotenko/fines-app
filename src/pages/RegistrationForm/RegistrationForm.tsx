import React, { FC } from 'react';
import { Typography, Box } from '@mui/material';
import { LoadingButton as Button } from '@mui/lab';
import { Formik, Form, FormikHelpers } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input';
import useValidationSchema from './validation-schema';
import Translate from '../../components/Translate';
import { useTranslate } from '../../providers/I18n';
import { IRegistrationFormValue } from './registration-form.model';
import { registerUserThunk } from '../../store/user/thunk';
import { selectUserIsLoading } from '../../store/user/selectors';

const useRegistrationForm = () => {
  const loading = useSelector(selectUserIsLoading);
  const dispatch = useDispatch();
  const validationSchema = useValidationSchema();
  const t = useTranslate();

  const handleSubmit = (
    formValue: IRegistrationFormValue,
    formikHelpers: FormikHelpers<IRegistrationFormValue>
  ) => {
    dispatch(registerUserThunk(formValue, formikHelpers));
  };

  return { loading, t, validationSchema, handleSubmit };
};

const RegistrationForm: FC = () => {
  const { loading, t, validationSchema, handleSubmit } = useRegistrationForm();

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
