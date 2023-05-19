import React, { FC } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { Stack } from '@mui/material';
import { LoadingButton as Button } from '@mui/lab';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Input';
import { useNotification } from '../../providers/NotificationProvider';
import Translate from '../Translate';
import { selectUser, selectUserIsLoading } from '../../store/user/selectors';
import { IUpdateEmailFormValue } from './update-email-form.model';
import { updateEmailThunk } from '../../store/user/thunk';

const validationSchema = yup.object().shape({
  email: yup.string().email().min(6).max(40).required(),
});

const useUpdateEmailForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectUserIsLoading);
  const user = useSelector(selectUser);
  const { showNotification } = useNotification();

  const handleSubmit = (
    formValue: IUpdateEmailFormValue,
    formikHelpers: FormikHelpers<IUpdateEmailFormValue>
  ) => {
    dispatch(updateEmailThunk(formValue, formikHelpers, showNotification));
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
        <Stack spacing={2}>
          <Input name="email" label="Email" />
          <Button variant="contained" type="submit" loading={loading}>
            <Translate t="updateEmailForm.submit" />
          </Button>
        </Stack>
      </Form>
    </Formik>
  );
};

export default UpdateEmailForm;
