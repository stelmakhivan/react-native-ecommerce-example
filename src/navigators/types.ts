import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';

import {Nav} from '__generated__/types';

export type MainTabNavigatorParamList = {
  Home: undefined;
  Shop: NavigatorScreenParams<ShopStackNavigatorParamList>;
  Bag: undefined;
  Wants: undefined;
  Account: undefined;
};

export type ShopStackNavigatorParamList = {
  Categories: undefined;
  Category: Pick<Nav, 'category' | 'url'>;
};

export type RootTabScreenProps<
  T extends keyof MainTabNavigatorParamList = keyof MainTabNavigatorParamList,
> = MaterialBottomTabScreenProps<MainTabNavigatorParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainTabNavigatorParamList {}
  }
}
