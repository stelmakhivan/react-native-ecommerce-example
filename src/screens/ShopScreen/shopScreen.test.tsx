import {render} from '@testing-library/react-native';

import {ShopScreen} from './ShopScreen';

describe('The ShopScreen component', () => {
  it('should render title', () => {
    const {getByText} = render(<ShopScreen />);

    expect(getByText('ShopScreen component')).toBeTruthy();
  });
});
