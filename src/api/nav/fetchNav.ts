import {QueryFunction} from 'react-query';

import {Nav} from '__generated__/types';

export const fetchNav: QueryFunction<Nav[] | null, string[]> = async ({
  signal,
}): Promise<Nav[] | null> => {
  try {
    const response = await fetch(
      'https://my-json-server.typicode.com/benirvingplt/products/nav',
      {
        signal,
      },
    );
    return await response.json();
  } catch (error) {
    console.warn(error);
    return null;
  }
};
