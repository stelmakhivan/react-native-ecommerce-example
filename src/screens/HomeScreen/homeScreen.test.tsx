import {render} from '@testing-library/react-native';

import {HomeScreen} from './HomeScreen';

describe('The HomeScreen component', () => {
  it('should render title', () => {
    const {getByText} = render(<HomeScreen />);

    expect(getByText('HomeScreen component')).toBeTruthy();
  });
});
