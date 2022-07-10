import {RouteProp} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

import {
  RootTabScreenProps,
  ShopStackNavigatorParamList,
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
      navigation: RootTabScreenProps['navigation'];
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
