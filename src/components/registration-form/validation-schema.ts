import * as yup from 'yup';
import { useTranslate } from '../../providers/i18n';

const useValidationSchema = () => {
  const t = useTranslate();
  const required = t('registrationForm.validation.required');

  return yup.object().shape({
    name: yup.string().label('Name').min(4).max(40).required(required),
    email: yup.string().label('Email').email().min(6).max(50).required(required),
    password: yup.string().label('Password').min(8).max(50).required(required),
    confirmPassword: yup
      .string()
      .label('Confirm password')
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required(required),
  });
};

export default useValidationSchema;
