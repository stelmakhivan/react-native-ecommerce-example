import {useBanner} from 'hooks/useBanner/useBanner';

export type BannerProps = {
  data: ReturnType<typeof useBanner>['data'];
};
