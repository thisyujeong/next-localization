import { InitOptions } from 'i18next';

export const fallbackLng = 'en';
export const locales = [fallbackLng, 'ko'] as const;
export type LocaleTypes = (typeof locales)[number];
export const defaultNS = 'common';

export function getOptions(
  lang = fallbackLng,
  ns: string | string[] = defaultNS
): InitOptions {
  return {
    // debug: true, // Set to true to see console logs
    supportedLngs: locales,
    fallbackLng,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
