import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AppStore} from 'store';

import {BagState} from './bag.types';

import {Product} from '__generated__/types';

export const initialState: BagState = {
  products: [],
};

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addToBag: (state, action: PayloadAction<Product>) => {
      const existedProduct = state.products.find(
        product => product.id === action.payload.id,
      );

      if (existedProduct) {
        return;
      }

      state.products.push(action.payload);
    },
    removeFromBag: (state, action: PayloadAction<Product['id']>) => {
      state.products = state.products.filter(
        product => product.id !== action.payload,
      );
    },
  },
});

export const selectProducts = (state: AppStore) => state.bag.products;
export const selectTotalProducts = (state: AppStore) =>
  state.bag.products.length;

export const {addToBag, removeFromBag} = bagSlice.actions;

export default bagSlice.reducer;
