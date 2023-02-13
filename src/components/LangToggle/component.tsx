import React, { FC } from 'react';
import { Button } from '@mui/material';
import { Lang, useLang } from '../../providers/I18n';

const LangToggle: FC = () => {
  const { lang, setLang } = useLang();

  return (
    <ul className="lang-toggle">
      <li className="lang-toggle__list-item">
        <Button onClick={() => setLang(Lang.EN)} disabled={lang === Lang.EN}>
          {Lang.EN}
        </Button>
      </li>
      <li className="lang-toggle__list-item">
        <Button onClick={() => setLang(Lang.UA)} disabled={lang === Lang.UA}>
          {Lang.UA}
        </Button>
      </li>
    </ul>
  );
};

export default LangToggle;
