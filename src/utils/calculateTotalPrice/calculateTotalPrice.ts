import {BagProduct} from 'store/bag/bag.types';

export const calculateTotalPrice = (bagProducts: BagProduct[]) =>
  bagProducts.reduce((acc, bagProduct) => {
    const itemPrice = bagProduct.price * bagProduct.quantity;

    return acc + itemPrice;
  }, 0);
