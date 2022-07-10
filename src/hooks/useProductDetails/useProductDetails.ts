import {useQuery} from 'react-query';

import {fetchProductDetails} from 'api/product/fetchProductDetails';

import {Product} from '__generated__/types';

export const useProductDetails = (id: Product['id']) => {
  return useQuery(['products', `${id}`], args =>
    fetchProductDetails({...args, id: `${id}`}),
  );
};
