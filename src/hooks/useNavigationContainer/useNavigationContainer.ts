import {useRef} from 'react';

import {useFlipper} from '@react-navigation/devtools';

import {navigationRef} from 'navigators/navigationRef';

const useNavigationContainer = () => {
  const routeNameRef = useRef<string | undefined>();

  useFlipper(navigationRef);

  const onReady = () => {
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
  };

  const onStateChange = async () => {
    try {
      const previousRouteName = routeNameRef.current;
      const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

      if (previousRouteName !== currentRouteName) {
        //  TODO: log screen name to analytics
      }

      routeNameRef.current = currentRouteName;
    } catch {}
  };
  return {
    onReady,
    onStateChange,
  };
};

export {useNavigationContainer};
