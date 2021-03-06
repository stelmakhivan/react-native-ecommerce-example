import {useQuery} from 'react-query';

import {fetchNav} from 'api/nav/fetchNav';

export const useNav = () => {
  return useQuery(['nav'], fetchNav, {
    staleTime: 60 * 1000,
  });
};
