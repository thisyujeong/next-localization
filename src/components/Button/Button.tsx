'use client';

import React from 'react';
import styles from './Button.module.scss';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/utils/localization/client';
import { LocaleTypes } from '@/utils/localization/setting';

const Button = () => {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, 'common');
  return <button className={styles.button}>{t('change_lang')}</button>;
};

export default Button;
