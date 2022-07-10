import {NavigatorScreenParams} from '@react-navigation/native';

export type MainTabNavigatorParamList = {
  Home: undefined;
  Shop: NavigatorScreenParams<ShopStackNavigatorParamList>;
  Bag: undefined;
  Wants: undefined;
  Account: undefined;
};

export type ShopStackNavigatorParamList = {
  Categories: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainTabNavigatorParamList {}
  }
}
