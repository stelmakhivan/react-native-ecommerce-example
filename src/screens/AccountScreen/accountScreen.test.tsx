import {render} from '@testing-library/react-native';

import {AccountScreen} from './AccountScreen';

describe('The AccountScreen component', () => {
  it('should render title', () => {
    const {getByText} = render(<AccountScreen />);

    expect(getByText('AccountScreen component')).toBeTruthy();
  });
});
