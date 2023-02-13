import * as yup from 'yup';
import { useTranslate } from '../../providers/I18n';

const useValidationSchema = () => {
  const t = useTranslate();
  const required = t('fineForm.validation.required');

  return yup.object().shape({
    userId: yup.number().required(required),
    description: yup.string().min(10).required(required),
    amount: yup.number().min(1).required(required),
    deadline: yup.date().required(required),
  });
};

export default useValidationSchema;
