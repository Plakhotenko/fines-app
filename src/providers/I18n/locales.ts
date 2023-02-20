import { Lang } from './I18n';

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
    logout: 'Logout',
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
  loginForm: {
    title: 'Login',
    email: 'Email',
    password: 'Password',
    submit: 'Login',
    validation: {
      required: 'This field is required',
    },
  },
  fineForm: {
    submit: 'Create',
    validation: {
      required: 'This field is required',
    },
  },
};

const ua: Locale = {
  header: {
    login: 'Увійти',
    register: 'Зареєструватися',
    logout: 'Вийти',
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
  loginForm: {
    title: 'Увійти',
    email: 'Email',
    password: 'Пароль',
    submit: 'Увійти',
    validation: {
      required: `Обов'язкове поле`,
    },
  },
  fineForm: {
    submit: 'Створити',
    validation: {
      required: `Обов'язкове поле`,
    },
  },
};

export const locales: Locales = {
  [Lang.EN]: en,
  [Lang.UA]: ua,
};
