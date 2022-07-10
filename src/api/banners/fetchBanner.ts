import {QueryFunction} from 'react-query';

import {Banners} from '__generated__/types';

export const fetchBanner: QueryFunction<string[] | null, string[]> = async ({
  signal,
}): Promise<string[] | null> => {
  try {
    const response = await fetch(
      'https://my-json-server.typicode.com/benirvingplt/products/banners',
      {
        signal,
      },
    );
    const data: Banners = await response.json();
    return data.main.split(' - ');
  } catch (error) {
    console.warn(error);
    return null;
  }
};
