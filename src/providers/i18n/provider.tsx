import React, { FC, createContext, useState, useMemo } from 'react';

export enum Lang {
  EN = 'en',
  UA = 'ua',
}

export const LangContext = createContext({} as any);
LangContext.displayName = 'Lang';

const I18nProvider: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  const [lang, setLang] = useState(Lang.EN);

  const providerValue = useMemo(() => ({ lang, setLang }), [lang]);

  return <LangContext.Provider value={providerValue}>{children}</LangContext.Provider>;
};

export default I18nProvider;
