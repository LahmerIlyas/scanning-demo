import type {ReactiveVar} from '@apollo/client';

interface PersistedReactiveVarConfig {
  isSecure: boolean;
  resetOnLogout: boolean;
}

export interface PersistedReactiveVar<T> {
  reactiveVar: ReactiveVar<T | undefined>;
  restore: () => Promise<T | undefined>;
  clear: () => Promise<void>;
  reset: () => Promise<void>;
  config: PersistedReactiveVarConfig;
}
