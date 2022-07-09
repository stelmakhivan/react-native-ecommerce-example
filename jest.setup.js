import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.default.call = jest.fn();
  Reanimated.useValue = jest.fn();

  return Reanimated;
});

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
