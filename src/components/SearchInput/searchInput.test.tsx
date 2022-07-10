import {render} from '@testing-library/react-native';

import {SearchInput} from './SearchInput';
import {TEST_ID} from './searchInput.testID';

jest.mock('react-native-paper', () => ({
  Searchbar: 'Searchbar',
}));

describe('The SearchInput component', () => {
  it('should render search bar', () => {
    const {getByTestId} = render(<SearchInput />);

    expect(getByTestId(TEST_ID.SEARCH_INPUT)).toBeDefined();
  });
});
