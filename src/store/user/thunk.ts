import { Dispatch } from 'redux';
import { FormikHelpers } from 'formik';
import { auth, profile } from '../../services';
import { setAuth, setLoading, logOut, updateEmail } from './actions';
import { ILoginFormValue } from '../../pages/LoginForm/login-form.model';
import { IRegistrationFormValue } from '../../pages/RegistrationForm/registration-form.model';
import { IUpdateEmailFormValue } from '../../components/UpdateEmailForm/update-email-form.model';
import { IUpdatePasswordFormValue } from '../../components/UpdatePasswordForm/update-password-form.model';

export const loginUserThunk = (
  formValue: ILoginFormValue,
  { setFieldError }: FormikHelpers<ILoginFormValue>
) => (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  auth
    .login(formValue)
    .then(({ data }) => {
      localStorage.setItem('user', JSON.stringify(data));
      dispatch(setAuth(data));
    })
    .catch((error) => {
      const field = error?.response?.data?.field;
      const message = error?.response?.data?.message;
      if (field && message) {
        setFieldError(field, message);
      }
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};

export const registerUserThunk = (
  formValue: IRegistrationFormValue,
  { setFieldError }: FormikHelpers<IRegistrationFormValue>
) => (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  auth
    .register(formValue)
    .then(() => {
      const { email, password } = formValue;
      auth.login({ email, password }).then(({ data }) => {
        localStorage.setItem('user', JSON.stringify(data));
        dispatch(setAuth(data));
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
      dispatch(setLoading(false));
    });
};

export const updateEmailThunk = (
  formValue: IUpdateEmailFormValue,
  { setFieldError }: FormikHelpers<IUpdateEmailFormValue>,
  showNotification: (_: string) => void
) => (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  profile
    .updateEmail(formValue)
    .then(() => {
      dispatch(updateEmail(formValue.email));
      showNotification('Email successfully updated');
    })
    .catch((error) => {
      const message = error?.response?.data?.message;
      if (message) {
        setFieldError('email', message);
      }
    })
    .finally(() => dispatch(setLoading(false)));
};

export const updatePasswordThunk = (
  formValue: IUpdatePasswordFormValue,
  { resetForm, setFieldError }: FormikHelpers<IUpdatePasswordFormValue>,
  showNotification: (_: string) => void
) => (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  profile
    .updatePassword(formValue)
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
    .finally(() => dispatch(setLoading(false)));
};

export const logOutThunk = () => (dispatch: Dispatch) => {
  localStorage.removeItem('user');
  dispatch(logOut());
};
