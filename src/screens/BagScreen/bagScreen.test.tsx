import {render} from '@testing-library/react-native';

import {BagScreen} from './BagScreen';

describe('The BagScreen component', () => {
  it('should render title', () => {
    const {getByText} = render(<BagScreen />);

    expect(getByText('BagScreen component')).toBeTruthy();
  });
});
