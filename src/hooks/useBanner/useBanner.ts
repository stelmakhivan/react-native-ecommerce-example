import {useQuery} from 'react-query';

import {fetchBanner} from 'api/banners/fetchBanner';

export const useBanner = () => {
  return useQuery(['banner'], fetchBanner);
};
