import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import {AvailableLocale, LocaleKey, Locales} from './types';
import {enUS} from './en-US';
import {esMX} from './es-MX';

export const supportedLanguages: AvailableLocale[] = ['en-US', 'es-MX'];

export const supportedLanguageTags = supportedLanguages;

I18n.translations = {
  en_US: enUS,
  es_MX: esMX,
};

I18n.defaultLocale = 'en_US';
I18n.fallbacks = true;

export const getBestDeviceAvailableLocale = (): AvailableLocale => {
  let selectedLanguage: AvailableLocale = 'en-US';

  const deviceLocales = RNLocalize.getLocales();

  for (const deviceLocale of deviceLocales) {
    const match = supportedLanguageTags.find(locale => {
      const lngCode = locale.split('-')[0];
      return lngCode.toLowerCase() === deviceLocale.languageCode.toLowerCase();
    });

    if (match) {
      selectedLanguage = match;
      break;
    }
  }

  return selectedLanguage;
};

export const setI18nLocale = (locale: AvailableLocale) => {
  const i18nLocale = locale.replace('-', '_');
  I18n.locale = i18nLocale;
};

export function createLocale<T extends LocaleKey>(localeKey: T) {
  return function <K extends keyof Locales[T]>(
    translationKey: K,
    options?: Record<string, any>,
  ): string {
    const key = `${localeKey}.${String(translationKey)}`;
    return I18n.t(key, options);
  };
}

const deviceLocale = getBestDeviceAvailableLocale();
setI18nLocale(deviceLocale);

export {I18n};

