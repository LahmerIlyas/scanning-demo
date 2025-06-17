import {
  addBreadcrumb,
  captureException,
  captureMessage,
  init,
  withScope,
  setUser,
} from '@sentry/react-native';
import type { Scope } from '@sentry/react-native';
import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';

export type Extras = Parameters<InstanceType<typeof Scope>['setExtras']>[0];

const logToConsole = (
  context: string | undefined,
  error: string | Error,
  extras?: Extras,
): void => {
  if (__DEV__) {
    console.log(
      `[${context || 'Error'}]: ${error} | Extras: ${JSON.stringify(extras)}`,
    );
  }
};

const sentryRelease = () => {
  return `${DeviceInfo.getBundleId()}@${DeviceInfo.getVersion()}+${DeviceInfo.getBuildNumber()}`
};

const setUp = (): void => {
  init({
    autoInitializeNativeSdk: true,
    debug: true,
    dist: DeviceInfo.getBuildNumber(),
    dsn: Config.SENTRY_DSN,
    environment: Config.ENVIRONMENT,
    enableNative: true,
    enableNativeCrashHandling: true,
    release: sentryRelease(),
  });
};

const logEvent = (message: string, extras?: Extras): void => {
  withScope((scope): void => {
    scope.setLevel('info');
    if (extras) {
      scope.setExtras(extras);
    }
    captureMessage(message);
  });
};

const logError = (error: Error, extras?: Extras): void => {
  if (__DEV__) {
    logToConsole(undefined, error as string | Error, extras);
    return;
  }
  withScope((scope): void => {
    scope.setLevel('error');
    if (extras) {
      scope.setExtras(extras);
    }
    captureException(error);
  });
};

const logNavigation = (
  routeName: string,
  params?: { [name: string]: string } | undefined,
  extras?: Extras,
): void => {
  withScope((scope): void => {
    if (extras) {
      scope.setExtras(extras);
    }
    addBreadcrumb({
      category: 'navigation',
      data: { params, routeName },
      level: 'info',
      message: `navigated to ${routeName}`,
    });
  });
};

const setUserId = (id: string | undefined): void => {
  setUser({
    id,
  });
};

export const logInfo: typeof console.log = (
  message?: unknown,
  ...optionalParams: unknown[]
) => {
  const dateNow = new Date();

  console.log(`${dateNow.toISOString()} -> ${message}`, ...optionalParams);
};

export default {
  logError,
  logEvent,
  logInfo,
  logNavigation,
  logToConsole,
  setUp,
  setUserId,
};
