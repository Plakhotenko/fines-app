import React, { FC, useState, useEffect, useRef, useContext } from 'react';
import { Typography, Box } from '@mui/material';
import { LoadingButton as Button } from '@mui/lab';
import { Formik, Form, FormikProps } from 'formik';
import client from '../../client';
import Input from '../input';
import useValidationSchema from './validation-schema';
import Translate from '../translate';
import { useTranslate, LangContext } from '../../providers/i18n';

interface IFormValue {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const useRegistrationForm = () => {
  const formikRef = useRef<FormikProps<IFormValue>>(null);
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState<IFormValue | null>(null);
  const validationSchema = useValidationSchema();
  const { lang } = useContext(LangContext);
  const t = useTranslate();

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
      .post('/register', formValue)
      .then(console.log)
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

const RegistrationForm: FC = () => {
  const { loading, handleSubmit, formikRef, t, validationSchema } = useRegistrationForm();

  return (
    <Box sx={{ maxWidth: '500px', mx: 'auto', py: '40px', px: '16px' }}>
      <Formik
        innerRef={formikRef}
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
            {t('registrationForm.submit')}
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default RegistrationForm;
