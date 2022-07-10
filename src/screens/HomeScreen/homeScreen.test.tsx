import {render} from '@testing-library/react-native';
import {UseQueryResult} from 'react-query';

import {TEST_ID} from 'screens/HomeScreen/homeScreen.testID';

import {useBanner} from 'hooks/useBanner/useBanner';

import {HomeScreen} from './HomeScreen';

jest.mock('components/Loader/Loader', () => ({
  Loader: 'Loader',
}));
jest.mock('components/Banner/Banner', () => ({
  Banner: 'Banner',
}));
jest.mock('components/SearchInput/SearchInput', () => ({
  SearchInput: 'SearchInput',
}));
jest.mock('hooks/useBanner/useBanner');

//TODO: improve test coverage
describe('The HomeScreen component', () => {
  const useBannerMock = useBanner as jest.MockedFunction<typeof useBanner>;

  it('should render home screen', () => {
    const {getByTestId} = render(<HomeScreen />);

    expect(getByTestId(TEST_ID.HOME_SCREEN)).toBeDefined();
  });

  it('should render loader', () => {
    useBannerMock.mockReturnValue({
      data: null,
      isLoading: true,
      refetch: jest.fn(),
      isRefetching: false,
    } as unknown as UseQueryResult<string[] | null, unknown>);

    const {getByTestId} = render(<HomeScreen />);

    expect(getByTestId(TEST_ID.LOADER)).toBeDefined();
  });
});
