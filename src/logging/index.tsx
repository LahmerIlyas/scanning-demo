
import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';


const logToConsole = (
  context: string | undefined,
  error: string | Error,
  extras?: any,
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

};

const logEvent = (message: string, extras?: any): void => {

};

const logError = (error: Error, extras?: any): void => {

};

const logNavigation = (
  routeName: string,
  params?: { [name: string]: string } | undefined,
  extras?: any,
): void => {

};

const setUserId = (id: string | undefined): void => {

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
