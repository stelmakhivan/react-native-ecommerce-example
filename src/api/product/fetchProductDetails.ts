import {QueryFunction} from 'react-query';

import {Product} from '__generated__/types';

export const fetchProductDetails = async ({
  signal,
  id,
}: Parameters<QueryFunction<Product | null, string[]>>[number] & {
  id: string;
}): Promise<Product | null> => {
  try {
    //TODO: use filter, sort params etc. to fetch products
    const response = await fetch(
      `https://my-json-server.typicode.com/benirvingplt/products/products/${id}`,
      {
        signal,
      },
    );
    const product: Product | null = await response.json();

    //NOTE: fix broken image links
    return product
      ? {...product, img: product.img.replace('http://', 'https://')}
      : null;
  } catch (error) {
    console.warn(error);
    return null;
  }
};
