import React, { FC, useContext } from 'react';
import { Button } from '@mui/material';
import { Lang, LangContext } from '../../providers/I18n';

const LangToggle: FC = () => {
  const { lang, setLang } = useContext(LangContext);

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
