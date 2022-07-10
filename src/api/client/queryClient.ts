// NOTE: might be replaced with RTKQuery
// https://redux-toolkit.js.org/rtk-query/overview
import {QueryClient} from 'react-query';

const queryClient = new QueryClient();

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin({queryClient});
  });
}

export {queryClient};
