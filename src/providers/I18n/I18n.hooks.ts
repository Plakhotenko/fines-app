import { useContext } from 'react';
import { LangContext } from './I18nProvider';
import { locales } from './locales';

const getValueByPath = (obj: Record<string, any>, path: string): any => {
  const paths = path.split('.');
  let current = obj;

  for (let i = 0; i < paths.length; ++i) {
    if (current[paths[i]] === undefined) {
      return undefined;
    }
    current = current[paths[i]];
  }
  return current;
};

export const useLang = () => useContext(LangContext);

export const useTranslate = (): ((t: string) => string) => {
  const { lang } = useContext(LangContext);
  return (t: string) => {
    const translation = getValueByPath(locales[lang], t);
    if (typeof translation === 'string') return translation;
    return '';
  };
};
