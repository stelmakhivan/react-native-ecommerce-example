import {useQuery} from 'react-query';

import {fetchProducts} from 'api/products/fetchProducts';

export const useProducts = (url: string) => {
  return useQuery(['products', url], args => fetchProducts({...args, url}));
};
