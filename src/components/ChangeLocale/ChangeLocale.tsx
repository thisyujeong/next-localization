'use client';

import React from 'react';
import styles from './ChangeLocale.module.scss';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { fallbackLng, LocaleTypes } from '@/utils/localization/setting';
import { useTranslation } from '@/utils/localization/client';

const ChangeLocale = ({}) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useParams()?.locale as LocaleTypes;
  const { t, i18n } = useTranslation(locale, 'common');

  const segmentsPath = pathname.slice(1).split('/');
  console.log(pathname);
  const withoutLocalePath = locale === fallbackLng ? segmentsPath : segmentsPath.slice(1);

  const changeLanguage = (locale: LocaleTypes) => {
    i18n.changeLanguage(locale); // 클라이언트 측 언어 변경
    router.push(`/${locale}/${withoutLocalePath.join('/')}`); // URL에 언어 반영
  };

  return (
    <div>
      <button
        className={`${styles.button} ${i18n.language === 'ko' && styles.active}`}
        onClick={() => changeLanguage('ko')}
      >
        {t('ko')}
      </button>
      <button
        className={`${styles.button} ${i18n.language === 'en' && styles.active}`}
        onClick={() => changeLanguage('en')}
      >
        {t('en')}
      </button>
    </div>
  );
};

export default ChangeLocale;
