import {render} from '@testing-library/react-native';

import {TEST_ID} from 'screens/BagScreen/bagScreen.testID';

import {BagScreen} from './BagScreen';

jest.mock(
  'screens/BagScreen/BagProductHiddenItem/BagProductHiddenItem',
  () => ({
    BagProductHiddenItem: () => 'BagProductHiddenItem',
  }),
);
jest.mock('screens/BagScreen/BagProductItem/BagProductItem', () => ({
  BagProductItem: () => 'BagProductItem',
}));
jest.mock('store/bag', () => ({
  selectProducts: jest.fn(),
  selectTotalProducts: jest.fn(),
}));
jest.mock('utils/calculateTotalPrice/calculateTotalPrice', () => ({
  calculateTotalPrice: jest.fn(),
}));

describe('The BagScreen component', () => {
  it('should render empty placeholder when list is empty', () => {
    const {queryByTestId} = render(<BagScreen />);

    expect(queryByTestId(TEST_ID.BAG_SCREEN)).toBeNull();
  });
});
