import {DeviceEventEmitter} from 'react-native';

export const event = DeviceEventEmitter;

export const events = {
  navigation: {
    viewAlternatives: 'navigation.viewAlternatives',
  },
};

export const emitViewAlternatives = (id: string) => {
  event.emit(events.navigation.viewAlternatives, {id})
};