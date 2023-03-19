import React, { FC } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { LoadingButton as Button } from '@mui/lab';
import { Stack } from '@mui/material';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Input';
import { useNotification } from '../../providers/NotificationProvider';
import Translate from '../Translate';
import { IUpdatePasswordFormValue } from './update-password-form.model';
import { updatePasswordThunk } from '../../store/user/thunk';
import { selectUserIsLoading } from '../../store/user/selectors';

const validationSchema = yup.object().shape({
  oldPassword: yup.string().required(),
  password: yup.string().min(8).max(50).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must match')
    .required(),
});

const useUpdatePasswordForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectUserIsLoading);
  const { showNotification } = useNotification();

  const handleSubmit = (
    formValue: IUpdatePasswordFormValue,
    formikHelpers: FormikHelpers<IUpdatePasswordFormValue>
  ) => {
    dispatch(updatePasswordThunk(formValue, formikHelpers, showNotification));
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
        <Stack spacing={2}>
          <Input name="oldPassword" label="Old password" type="password" />
          <Input name="password" label="New password" type="password" />
          <Input name="confirmPassword" label="Confirm new password" type="password" />
          <Button variant="contained" type="submit" loading={loading}>
            <Translate t="updatePasswordForm.submit" />
          </Button>
        </Stack>
      </Form>
    </Formik>
  );
};

export default UpdatePasswordForm;
