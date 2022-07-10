import {Product} from '__generated__/types';

export type BagProduct = Product & {quantity: number};

export interface BagState {
  products: BagProduct[];
}
