import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.default.call = jest.fn();
  Reanimated.useValue = jest.fn();

  return Reanimated;
});

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const mockStore = {
  getState: jest.fn(),
};

jest.mock('store', () => ({
  useAppDispatch: jest
    .fn()
    .mockReturnValue(dispatchedResult => dispatchedResult),
  useAppSelector: jest.fn().mockImplementation(selector => selector()),
  store: mockStore,
}));
