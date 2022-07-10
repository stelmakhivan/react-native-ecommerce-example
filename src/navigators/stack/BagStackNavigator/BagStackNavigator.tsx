import {createStackNavigator} from '@react-navigation/stack';

import {BagScreen} from 'screens/BagScreen/BagScreen';

import {BagStackNavigatorParamList} from 'navigators/types';

import {
  BAG_ITEMS_SCREEN_OPTIONS,
  BAG_STACK_SCREEN_OPTIONS,
} from './shopStackNavigator.settings';

const Stack = createStackNavigator<BagStackNavigatorParamList>();

const BagStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={BAG_STACK_SCREEN_OPTIONS}>
      <Stack.Screen
        name="BagItems"
        component={BagScreen}
        options={BAG_ITEMS_SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};

export {BagStackNavigator};
