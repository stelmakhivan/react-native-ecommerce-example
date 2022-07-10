import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

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

export type RootTabScreenProps<T extends keyof MainTabNavigatorParamList> =
  MaterialBottomTabScreenProps<MainTabNavigatorParamList, T>;

export type ShopStackScreenProps<T extends keyof ShopStackNavigatorParamList> =
  CompositeScreenProps<
    StackScreenProps<ShopStackNavigatorParamList, T>,
    RootTabScreenProps<keyof MainTabNavigatorParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainTabNavigatorParamList {}
  }
}
