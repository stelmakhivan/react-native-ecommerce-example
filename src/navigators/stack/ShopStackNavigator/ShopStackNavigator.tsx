import {createStackNavigator} from '@react-navigation/stack';

import {CategoriesScreen} from 'screens/CategoriesScreen/CategoriesScreen';
import {CategoryScreen} from 'screens/CategoryScreen/CategoryScreen';
import {ProductDetailsScreen} from 'screens/ProductDetailsScreen/ProductDetailsScreen';
import {ProductListScreen} from 'screens/ProductListScreen/ProductListScreen';

import {ShopStackNavigatorParamList} from 'navigators/types';

import {
  CATEGORY_SCREEN_OPTIONS,
  PRODUCT_DETAILS_SCREEN_OPTIONS,
  PRODUCT_LIST_SCREEN_OPTIONS,
  SHOP_STACK_SCREEN_OPTIONS,
} from './shopStackNavigator.settings';

const Stack = createStackNavigator<ShopStackNavigatorParamList>();

const ShopStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={SHOP_STACK_SCREEN_OPTIONS}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={CATEGORY_SCREEN_OPTIONS}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={PRODUCT_LIST_SCREEN_OPTIONS}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={PRODUCT_DETAILS_SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};

export {ShopStackNavigator};
