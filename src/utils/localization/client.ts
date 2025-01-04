'use client';

import { useEffect } from 'react';
import { initReactI18next, useTranslation as useTransAlias } from 'react-i18next';
import { getOptions, locales, type LocaleTypes } from './setting';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

const runsOnServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language: LocaleTypes, namespace: string) => {
      return import(`./locales/${language}/${namespace}.json`);
    })
  )
  .init({
    ...getOptions(),
    lng: undefined, // detect the language on the client
    detection: { order: ['path'] },
    preload: runsOnServerSide ? locales : [],
  });

export function useTranslation(lng: LocaleTypes, ns: string | string[]) {
  const namespaceArray = Array.isArray(ns) ? ns : [ns]; // 배열로 통일
  const translator = useTransAlias(namespaceArray);
  const { i18n } = translator;

  if (runsOnServerSide && lng) {
    // && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    // Use our custom implementation when running on client side
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return;
      i18n.changeLanguage(lng); // 언어가 변경될 때 i18n의 설정언어를 변경합니다.
    }, [lng, i18n]);
  }
  return translator;
}
