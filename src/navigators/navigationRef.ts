import {createNavigationContainerRef} from '@react-navigation/native';

import {MainTabNavigatorParamList} from 'navigators/types';

export const navigationRef =
  createNavigationContainerRef<MainTabNavigatorParamList>();
