import {BagProduct} from 'store/bag/bag.types';

//TODO: create more abstract utils
export const calculateTotalQuantity = (bagProducts: BagProduct[]) =>
  bagProducts.reduce((acc, bagProduct) => {
    return acc + bagProduct.quantity;
  }, 0);
