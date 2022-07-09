import {render} from '@testing-library/react-native';

import {WantsScreen} from './WantsScreen';

describe('The WantsScreen component', () => {
  it('should render title', () => {
    const {getByText} = render(<WantsScreen />);

    expect(getByText('WantsScreen component')).toBeTruthy();
  });
});
