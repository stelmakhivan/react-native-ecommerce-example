import {createStackNavigator} from '@react-navigation/stack';

import {CategoriesScreen} from 'screens/CategoriesScreen/CategoriesScreen';

import {SHOP_STACK_SCREEN_OPTIONS} from 'navigators/stack/ShopStackNavigator/shopStackNavigator.settings';
import {ShopStackNavigatorParamList} from 'navigators/types';

const Stack = createStackNavigator<ShopStackNavigatorParamList>();

const ShopStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={SHOP_STACK_SCREEN_OPTIONS}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};

export {ShopStackNavigator};
