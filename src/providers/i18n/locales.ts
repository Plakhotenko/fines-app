import { Lang } from './provider';

interface Locale {
  [key: string]: string | Locale;
}

interface Locales {
  [key: string]: Locale;
}

const en: Locale = {
  header: {
    login: 'Login',
    register: 'Register',
  },
  registrationForm: {
    title: 'Registration',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm password',
    submit: 'Register',
    validation: {
      required: 'This field is required',
    },
  },
};

const ua: Locale = {
  header: {
    login: 'Увійти',
    register: 'Зареєструватися',
  },
  registrationForm: {
    title: 'Зареєструватися',
    name: `Ім'я`,
    email: 'Email',
    password: 'Пароль',
    confirmPassword: 'Підтвердити пароль',
    submit: 'Зареєструватися',
    validation: {
      required: `Обов'язкове поле`,
    },
  },
};

export const locales: Locales = {
  [Lang.EN]: en,
  [Lang.UA]: ua,
};
