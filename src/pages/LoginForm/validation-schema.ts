import * as yup from 'yup';
import { useTranslate } from '../../providers/I18n';

const useValidationSchema = () => {
  const t = useTranslate();
  const required = t('loginForm.validation.required');

  return yup.object().shape({
    email: yup.string().label('Email').min(6).max(50).required(required),
    password: yup.string().label('Password').min(8).max(50).required(required),
  });
};

export default useValidationSchema;
