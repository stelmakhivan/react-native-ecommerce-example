import {QueryFunction} from 'react-query';

import {Product} from '__generated__/types';

export const fetchProducts = async ({
  signal,
}: Parameters<QueryFunction<Product[] | null, string[]>>[number] & {
  url: string;
}): Promise<Product[] | null> => {
  try {
    //TODO: use filter, sort params etc. to fetch products
    const response = await fetch(
      'https://my-json-server.typicode.com/benirvingplt/products/products',
      {
        signal,
      },
    );
    const data: Product[] | null = await response.json();

    //NOTE: fix broken links
    return (
      data?.map(product => ({
        ...product,
        img: product.img.replace('http://', 'https://'),
      })) || null
    );
  } catch (error) {
    console.warn(error);
    return null;
  }
};
