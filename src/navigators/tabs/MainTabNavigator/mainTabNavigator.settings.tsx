import {MaterialBottomTabNavigationOptions} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from 'navigators/tabs/MainTabNavigator/mainTabNavigator.styles';
import {RootTabScreenProps} from 'navigators/types';
import {useAppSelector} from 'store';
import {selectTotalQuantity} from 'store/bag';

export const HOME_SCREEN_OPTIONS: MaterialBottomTabNavigationOptions = {
  tabBarIcon: ({color}) => (
    <MaterialCommunityIcons
      name="home"
      color={color}
      size={26}
      style={styles.icon}
    />
  ),
};

export const SHOP_SCREEN_OPTIONS: MaterialBottomTabNavigationOptions = {
  tabBarIcon: ({color}) => (
    <MaterialCommunityIcons
      name="search-web"
      color={color}
      size={26}
      style={styles.icon}
    />
  ),
};

export const BAG_SCREEN_OPTIONS:
  | MaterialBottomTabNavigationOptions
  | ((
      props: RootTabScreenProps<'Bag'>,
    ) => MaterialBottomTabNavigationOptions) = () => {
  const badgeNumber = useAppSelector(selectTotalQuantity);

  return {
    tabBarIcon: ({color}) => (
      <MaterialCommunityIcons
        name="shopping"
        color={color}
        size={26}
        style={styles.icon}
      />
    ),
    tabBarBadge: badgeNumber === 0 ? false : badgeNumber,
  };
};

export const WANTS_SCREEN_OPTIONS: MaterialBottomTabNavigationOptions = {
  tabBarIcon: ({color}) => (
    <MaterialIcons
      name="favorite"
      color={color}
      size={26}
      style={styles.icon}
    />
  ),
};

export const ACCOUNT_SCREEN_OPTIONS: MaterialBottomTabNavigationOptions = {
  tabBarIcon: ({color}) => (
    <MaterialCommunityIcons
      name="account"
      color={color}
      size={26}
      style={styles.icon}
    />
  ),
};
