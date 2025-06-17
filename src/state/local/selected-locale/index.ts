import {getBestDeviceAvailableLocale, setI18nLocale} from '@/locales';
import makeVarPersisted from '@/state/local/reactive-persist/make-var-persisted';
import {AvailableLocale} from '@/locales/types';

const SELECTED_LOCALE_KEY = 'PEPSICO:SELECTED_LOCALE';

export interface SelectedLocaleLocal {
  selectedLocale: AvailableLocale;
}

const defaultSelectedLocaleLocal: SelectedLocaleLocal = {
  selectedLocale: getBestDeviceAvailableLocale(),
};

const encoder = (value: SelectedLocaleLocal): string => JSON.stringify(value);

const decoder = (value: string): SelectedLocaleLocal => {
  try {
    const parsed = JSON.parse(value) as SelectedLocaleLocal;
    if (
      parsed.selectedLocale === 'en-US' ||
      parsed.selectedLocale === 'es-MX'
    ) {
      setI18nLocale(parsed.selectedLocale);
      return parsed;
    }
    setI18nLocale(defaultSelectedLocaleLocal.selectedLocale);
    return defaultSelectedLocaleLocal;
  } catch (error) {
    console.warn('Failed to parse selected locale:', error);
    setI18nLocale(defaultSelectedLocaleLocal.selectedLocale);
    return defaultSelectedLocaleLocal;
  }
};

export const selectedLocalePersist = makeVarPersisted<SelectedLocaleLocal>({
  autoRestore: true,
  decoder,
  encoder,
  initialValue: defaultSelectedLocaleLocal,
  resetOnLogout: false,
  storageKey: SELECTED_LOCALE_KEY,
});

export const selectedLocaleVar = selectedLocalePersist.reactiveVar;

export const setSelectedLocale = (newLocale: AvailableLocale): void => {
  setI18nLocale(newLocale);
  selectedLocaleVar({
    selectedLocale: newLocale,
  });
};

export const getSelectedLocale = (): AvailableLocale => {
  const state = selectedLocaleVar();
  return state?.selectedLocale || 'en-US';
};

