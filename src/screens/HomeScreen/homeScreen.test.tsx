import {render} from '@testing-library/react-native';

import {TEST_ID} from 'screens/HomeScreen/homeScreen.testID';

import {HomeScreen} from './HomeScreen';

jest.mock('hooks/useBanner/useBanner');

//TODO: improve test coverage
describe('The HomeScreen component', () => {
  it('should render home screen', () => {
    const {getByTestId} = render(<HomeScreen />);

    expect(getByTestId(TEST_ID.HOME_SCREEN)).toBeDefined();
  });
});
