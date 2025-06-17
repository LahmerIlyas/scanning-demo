import React from 'react';

interface Props {
  children: React.ReactElement;
}

interface AuthState {
  userToken: string | null;
  isSignout: boolean;
  isAuthenticating: boolean;
}

enum AuthActionTypes {
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_ERROR = 'SIGN_IN_ERROR',
  SIGN_IN_STARTED = 'SIGN_IN_STARTED',
  SIGN_OUT = 'SIGN_OUT',
}

interface AuthAction {
  type: AuthActionTypes;
  token: string | null;
}

interface AuthCallbacks {
  signInError: () => void;
  signInSuccess: (token: string) => void;
  signInStarted: () => void;
  signOut: () => void;
}

export interface AuthManager {
  state: AuthState;
  authCallbacks: AuthCallbacks;
}

const AuthContext = React.createContext<AuthManager>({
  authCallbacks: {
    signInError: (): void => {},
    signInStarted: (): void => {},
    signInSuccess: (): void => {},
    signOut: (): void => {},
  },
  state: {isAuthenticating: false, isSignout: false, userToken: null},
});

export const useAuthContext = (): AuthManager => React.useContext(AuthContext);

const authStateReducer = (
  prevState: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN_SUCCESS:
      return {
        ...prevState,
        isAuthenticating: false,
        isSignout: false,
        userToken: action.token,
      };
    case AuthActionTypes.SIGN_IN_STARTED:
      return {
        ...prevState,
        isAuthenticating: true,
      };
    case AuthActionTypes.SIGN_IN_ERROR:
      return {
        ...prevState,
        isAuthenticating: false,
      };
    case AuthActionTypes.SIGN_OUT:
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
    default:
      return prevState;
  }
};

const initialReducerState: AuthState = {
  isAuthenticating: false,
  isSignout: false,
  userToken: null,
};

export const AuthContextProvider = ({children}: Props): React.ReactElement => {
  const [state, dispatch] = React.useReducer(
    authStateReducer,
    initialReducerState,
  );

  const authCallbacks = React.useMemo(
    () => ({
      signInError: () => {
        dispatch({token: null, type: AuthActionTypes.SIGN_IN_ERROR});
      },
      signInStarted: () => {
        dispatch({token: null, type: AuthActionTypes.SIGN_IN_STARTED});
      },
      signInSuccess: (token: string) => {
        dispatch({token, type: AuthActionTypes.SIGN_IN_SUCCESS});
      },
      signOut: () => dispatch({token: null, type: AuthActionTypes.SIGN_OUT}),
    }),
    [],
  );

  const value = React.useMemo(
    () => ({
      authCallbacks,
      state,
    }),
    [authCallbacks, state],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
