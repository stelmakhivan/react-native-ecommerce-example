import {render} from '@testing-library/react-native';

import styles from 'components/Loader/loader.styles';
import {TEST_ID} from 'components/Loader/loader.testID';

import {Loader} from './Loader';

jest.mock('react-native-paper', () => ({
  ActivityIndicator: 'ActivityIndicator',
}));

describe('The Loader component', () => {
  it('should render loader', () => {
    const {getByTestId} = render(<Loader />);

    expect(getByTestId(TEST_ID.LOADER)).toBeDefined();
    expect(getByTestId(TEST_ID.LOADER)).toHaveStyle(styles.container);
    expect(getByTestId(TEST_ID.LOADER)).toHaveProp('animating', true);
    expect(getByTestId(TEST_ID.LOADER)).toHaveProp('size', 'large');
  });
});
