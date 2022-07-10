import {RouteProp} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

import {
  ShopStackNavigatorParamList,
  ShopStackScreenProps,
} from 'navigators/types';

import styles from './shopStackNavigator.styles';

import {COLORS} from 'constants/colors';

export const SHOP_STACK_SCREEN_OPTIONS: StackNavigationOptions = {
  headerTitleStyle: styles.headerTitle,
  cardStyle: styles.card,
};

export const CATEGORY_SCREEN_OPTIONS:
  | StackNavigationOptions
  | ((props: {
      route: RouteProp<ShopStackNavigatorParamList, 'Category'>;
      navigation: ShopStackScreenProps<'Category'>['navigation'];
    }) => StackNavigationOptions) = ({route, navigation}) => ({
  title: route.params.category,
  headerLeft: () => (
    <IoniconsIcons
      name="chevron-back-circle"
      size={36}
      color={COLORS.gray}
      onPress={navigation.goBack}
    />
  ),
  headerLeftContainerStyle: styles.leftButtonContainer,
  headerTitleStyle: styles.title,
});

//TODO: create method for default screen options; DRY
export const PRODUCT_LIST_SCREEN_OPTIONS:
  | StackNavigationOptions
  | ((props: {
      route: RouteProp<ShopStackNavigatorParamList, 'ProductList'>;
      navigation: ShopStackScreenProps<'ProductList'>['navigation'];
    }) => StackNavigationOptions) = ({route, navigation}) => ({
  title: route.params.subCategory,
  headerLeft: () => (
    <IoniconsIcons
      name="chevron-back-circle"
      size={36}
      color={COLORS.gray}
      onPress={navigation.goBack}
    />
  ),
  headerLeftContainerStyle: styles.leftButtonContainer,
  headerTitleStyle: styles.title,
});

export const PRODUCT_DETAILS_SCREEN_OPTIONS:
  | StackNavigationOptions
  | ((props: {
      route: RouteProp<ShopStackNavigatorParamList, 'ProductDetails'>;
      navigation: ShopStackScreenProps<'ProductDetails'>['navigation'];
    }) => StackNavigationOptions) = ({navigation}) => ({
  title: '',
  headerShadowVisible: false,
  headerLeft: () => (
    <IoniconsIcons
      name="chevron-back-circle"
      size={36}
      color={COLORS.gray}
      onPress={navigation.goBack}
    />
  ),
  headerLeftContainerStyle: styles.leftButtonContainer,
  headerTransparent: true,
});
