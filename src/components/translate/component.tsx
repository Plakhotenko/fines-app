import React, { FC } from 'react';
import { useTranslate } from '../../providers/i18n';

const Translate: FC<{ t: string }> = ({ t }) => {
  const translate = useTranslate();
  return <span>{translate(t)}</span>;
};

export default Translate;
