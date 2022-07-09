import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {AccountScreen} from 'screens/AccountScreen/AccountScreen';
import {BagScreen} from 'screens/BagScreen/BagScreen';
import {HomeScreen} from 'screens/HomeScreen/HomeScreen';
import {ShopScreen} from 'screens/ShopScreen/ShopScreen';
import {WantsScreen} from 'screens/WantsScreen/WantsScreen';

import {
  ACCOUNT_SCREEN_OPTIONS,
  BAG_SCREEN_OPTIONS,
  HOME_SCREEN_OPTIONS,
  SHOP_SCREEN_OPTIONS,
  WANTS_SCREEN_OPTIONS,
} from 'navigators/tabs/MainTabNavigator/mainTabNavigator.settings';
import {MainTabNavigatorParamList} from 'navigators/types';

import styles from './mainTabNavigator.styles';

const Tab = createMaterialBottomTabNavigator<MainTabNavigatorParamList>();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={styles.bar}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={HOME_SCREEN_OPTIONS}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={SHOP_SCREEN_OPTIONS}
      />
      <Tab.Screen
        name="Bag"
        component={BagScreen}
        options={BAG_SCREEN_OPTIONS}
      />
      <Tab.Screen
        name="Wants"
        component={WantsScreen}
        options={WANTS_SCREEN_OPTIONS}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={ACCOUNT_SCREEN_OPTIONS}
      />
    </Tab.Navigator>
  );
};

export {MainTabNavigator};
