import {render} from '@testing-library/react-native';

import {TEST_ID} from 'components/Banner/banner.testID';

import {Banner} from './Banner';

//TODO: improve test coverage for styles etc...
describe('The Banner component', () => {
  it('should render title', () => {
    const {getByTestId} = render(<Banner data={[]} />);

    expect(getByTestId(TEST_ID.BANNER)).toBeDefined();
  });
});
