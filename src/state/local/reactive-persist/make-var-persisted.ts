import type {ReactiveVar} from '@apollo/client';
import {makeVar} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  getGenericPassword,
  setGenericPassword,
  resetGenericPassword,
} from 'react-native-keychain';

import type {PersistedReactiveVar} from './types';

type EncoderFunction<T> = (valueToEncode: T) => string;
type DecoderFunction<T> = (valueToDecode: string) => T;

interface PersistedReactiveVarProps<T> {
  initialValue: T;
  storageKey: string;
  autoRestore: boolean;
  encoder: EncoderFunction<T>;
  decoder: DecoderFunction<T>;
  isSecure?: boolean;
  resetOnLogout?: boolean;
}

const getCleanValueForStorage = <T>(
  value: T,
  encoder: EncoderFunction<T>,
): string => encoder(value);

const parseValueFromStorage = <T>(
  value: string,
  decoder: DecoderFunction<T>,
): T => decoder(value);

const persistData = async (
  key: string,
  value: string,
  isSecure: boolean,
): Promise<void> => {
  try {
    if (isSecure) {
      await setGenericPassword(key, value, {service: key});
    } else {
      await AsyncStorage.setItem(key, value);
    }
  } catch (e) {
    console.error('Error when trying to persist data. Error: ', e);
    throw e;
  }
};

const clearData = async (key: string, isSecure: boolean): Promise<void> => {
  try {
    if (isSecure) {
      await resetGenericPassword({service: key});
    } else {
      await AsyncStorage.removeItem(key);
    }
  } catch (e) {
    console.error(e as Error, {
      message: 'Error when trying to clear persist data',
    });
    throw e;
  }
};

const getPersistedData = async (
  key: string,
  isSecure: boolean,
): Promise<string | null> => {
  try {
    if (isSecure) {
      const result = await getGenericPassword({service: key});
      return result ? result.password : null;
    }

    const value = await AsyncStorage.getItem(key);

    return value;
  } catch (e) {
    console.error(e as Error, {
      message: 'Error when trying to get persisted data',
    });
    throw e;
  }
};

const makeVarPersisted = <T>({
  initialValue,
  storageKey,
  autoRestore,
  encoder,
  decoder,
  isSecure = false,
  resetOnLogout = true,
}: PersistedReactiveVarProps<T>): PersistedReactiveVar<T> => {
  const reactiveVar: ReactiveVar<T | undefined> = makeVar<T | undefined>(
    autoRestore ? undefined : initialValue,
  );

  const asyncReactiveVar = async (newValue?: T): Promise<void> => {
    if (typeof newValue === 'undefined') {
      return;
    }

    try {
      await persistData(
        storageKey,
        getCleanValueForStorage(newValue, encoder),
        isSecure,
      );
    } catch (e) {
      console.error(e as Error);
      return;
    }

    // Define asyncReactiveVariable as a callback for the next time the reactive variable is assigned
    reactiveVar.onNextChange(asyncReactiveVar);
  };

  const restoreVar = async (): Promise<T | undefined> => {
    let previousValue: string | null;
    try {
      previousValue = await getPersistedData(storageKey, isSecure);
    } catch (e) {
      console.error(e as Error);
      return undefined;
    }

    return previousValue
      ? reactiveVar(parseValueFromStorage(previousValue, decoder))
      : reactiveVar(initialValue);
  };

  if (autoRestore) {
    // Define asyncReactiveVariable as a callback for the next time the reactive variable is assigned
    reactiveVar.onNextChange(asyncReactiveVar);

    restoreVar();
  } else {
    asyncReactiveVar(initialValue);
  }

  const resetVar = async (): Promise<void> => {
    reactiveVar(initialValue);
  };

  const clearPersist = async (): Promise<void> => {
    await clearData(storageKey, isSecure);
  };

  return {
    clear: clearPersist,
    config: {isSecure, resetOnLogout},
    reactiveVar,
    reset: resetVar,
    restore: restoreVar,
  };
};

export default makeVarPersisted;
