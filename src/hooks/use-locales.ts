import {useReactiveVar} from '@apollo/client';
import {useCallback} from 'react';
import {AvailableLocale} from '@/locales/types';
import {
  selectedLocaleVar,
  setSelectedLocale as setSelectedLocaleLocal,
  getSelectedLocale,
} from '@/state/local/selected-locale';

export interface UseLocalesReturn {
  selectedLocale: AvailableLocale;
  setSelectedLocale: (locale: AvailableLocale) => void;
  isLocaleSelected: (locale: AvailableLocale) => boolean;
}

export const useLocales = (): UseLocalesReturn => {
  const selectedLocaleLocal = useReactiveVar(selectedLocaleVar);

  const setSelectedLocale = useCallback((locale: AvailableLocale) => {
    setSelectedLocaleLocal(locale);
  }, []);

  const isLocaleSelected = useCallback((locale: AvailableLocale) => {
    return getSelectedLocale() === locale;
  }, []);

  return {
    selectedLocale: selectedLocaleLocal?.selectedLocale || 'en-US',
    setSelectedLocale,
    isLocaleSelected,
  };
};

