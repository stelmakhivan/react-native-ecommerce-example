import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

import {Link, Nav, Product} from '__generated__/types';

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
  ProductList: {
    subCategory: Link['name'];
    url: string;
  };
  ProductDetails: {
    id: Product['id'];
  };
};

export type BagStackNavigatorParamList = {
  BagItems: undefined;
};

export type RootTabScreenProps<T extends keyof MainTabNavigatorParamList> =
  MaterialBottomTabScreenProps<MainTabNavigatorParamList, T>;

export type ShopStackScreenProps<T extends keyof ShopStackNavigatorParamList> =
  CompositeScreenProps<
    StackScreenProps<ShopStackNavigatorParamList, T>,
    RootTabScreenProps<keyof MainTabNavigatorParamList>
  >;

export type BagStackScreenProps<T extends keyof BagStackNavigatorParamList> =
  CompositeScreenProps<
    StackScreenProps<BagStackNavigatorParamList, T>,
    RootTabScreenProps<keyof MainTabNavigatorParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainTabNavigatorParamList {}
  }
}
