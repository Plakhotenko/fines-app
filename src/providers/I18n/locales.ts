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
    menu: {
      logout: 'Logout',
      settings: 'Settings',
      dashboard: 'Dashboard',
    },
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
  updateEmailForm: {
    submit: 'Update email',
  },
  updatePasswordForm: {
    submit: 'Update password',
  },
};

const ua: Locale = {
  header: {
    login: 'Увійти',
    register: 'Зареєструватися',
    menu: {
      logout: 'Вийти',
      settings: 'Налаштування',
      dashboard: 'Дашборд',
    },
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
  updateEmailForm: {
    submit: 'Оновити email',
  },
  updatePasswordForm: {
    submit: 'Оновити пароль',
  },
};

export const locales: Locales = {
  [Lang.EN]: en,
  [Lang.UA]: ua,
};
