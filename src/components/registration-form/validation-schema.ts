import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().label('Name').min(4).max(40).required(),
  email: yup.string().label('Email').email().min(6).max(50).required(),
  password: yup.string().label('Password').min(8).max(50).required(),
  confirmPassword: yup
    .string()
    .label('Confirm password')
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(),
});

export default validationSchema;
