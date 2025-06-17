import {useCallback} from 'react';
import {useReactiveVar} from '@apollo/client';

import makeVarPersisted from '@/state/local/reactive-persist/make-var-persisted';

const decoder = (value: string): string | undefined => {
  return value || undefined;
};

const encoder = (value: string | undefined): string => {
  return value || '';
};

export const authLocalStatePersist = makeVarPersisted<string | undefined>({
  autoRestore: true,
  decoder,
  encoder,
  initialValue: undefined,
  isSecure: false,
  storageKey: 'demo/auth',
});

export const useAuthLocalState = () => {
  const cookie = useReactiveVar(authLocalStatePersist.reactiveVar);

  const setCookie = useCallback((newCookie: string) => {
    const {reactiveVar} = authLocalStatePersist;
    reactiveVar(newCookie);
  }, []);

  const clearCookie = useCallback(() => {
    const {reactiveVar} = authLocalStatePersist;
    reactiveVar(undefined);
  }, []);

  return {
    setCookie,
    cookie,
    clearCookie,
  };
};

export const useIsUserLoggedIn = () => {
  const {cookie} = useAuthLocalState();
  return Boolean(cookie);
};
