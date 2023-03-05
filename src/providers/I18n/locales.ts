import { Lang } from './I18nProvider';

interface ILocale {
  [key: string]: string | ILocale;
}

interface ILocales {
  [key: string]: ILocale;
}

const en: ILocale = {
  header: {
    loggedInAs: 'Logged in as:',
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

const ua: ILocale = {
  header: {
    loggedInAs: 'Ви увійшли як:',
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

export const locales: ILocales = {
  [Lang.EN]: en,
  [Lang.UA]: ua,
};
