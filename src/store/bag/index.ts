import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AppStore} from 'store';
import {calculateTotalQuantity} from 'utils/calculateTotalQuantity/calculateTotalQuantity';

import {BagProduct, BagState} from './bag.types';

export const initialState: BagState = {
  products: [],
};

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addToBag: (state, action: PayloadAction<BagProduct>) => {
      const existedProduct = state.products.find(
        product => product.id === action.payload.id,
      );

      if (existedProduct) {
        return;
      }

      state.products.push(action.payload);
    },
    removeFromBag: (state, action: PayloadAction<BagProduct['id']>) => {
      state.products = state.products.filter(
        product => product.id !== action.payload,
      );
    },
    incrementQuantity: (state, action: PayloadAction<BagProduct['id']>) => {
      const existedProduct = state.products.find(
        product => product.id === action.payload,
      );

      if (!existedProduct) {
        return;
      }

      existedProduct.quantity += 1;
    },
    decrementQuantity: (state, action: PayloadAction<BagProduct['id']>) => {
      const existedProduct = state.products.find(
        product => product.id === action.payload,
      );

      if (!existedProduct) {
        return;
      }

      existedProduct.quantity -= 1;
    },
    clearBag: () => initialState,
  },
});

export const selectProducts = (state: AppStore) => state.bag.products;
export const selectTotalProducts = (state: AppStore) =>
  state.bag.products.length;
export const selectTotalQuantity = (state: AppStore) =>
  calculateTotalQuantity(state.bag.products);

export const {
  addToBag,
  removeFromBag,
  incrementQuantity,
  decrementQuantity,
  clearBag,
} = bagSlice.actions;

export default bagSlice.reducer;
