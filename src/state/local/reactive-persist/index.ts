import {authLocalStatePersist} from '@/state/local/auth';
import {selectedLocalePersist} from '@/state/local/selected-locale';

const persistedVars = [authLocalStatePersist, selectedLocalePersist];

export const resetOnLogoutPersistedVars = async (): Promise<void> => {
  for (let i = 0; i < persistedVars.length; i += 1) {
    const {
      config: {resetOnLogout},
      reset,
    } = persistedVars[i];
    if (resetOnLogout) {
      await reset();
    }
  }
};
