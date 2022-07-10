import {Text, TouchableOpacity} from 'react-native';

import {StackNavigationOptions} from '@react-navigation/stack';

import {BagStackScreenProps} from 'navigators/types';
import {useAppDispatch} from 'store';
import {clearBag} from 'store/bag';

import styles from './shopStackNavigator.styles';

export const BAG_STACK_SCREEN_OPTIONS: StackNavigationOptions = {
  headerTitleStyle: styles.headerTitle,
  cardStyle: styles.card,
};

export const BAG_ITEMS_SCREEN_OPTIONS:
  | StackNavigationOptions
  | ((
      props: BagStackScreenProps<'BagItems'>,
    ) => StackNavigationOptions) = () => ({
  title: 'Bag',
  headerShadowVisible: false,
  headerRight: function HeaderRight() {
    const dispatch = useAppDispatch();

    const handlePress = () => {
      dispatch(clearBag());
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <Text>CLEAR</Text>
      </TouchableOpacity>
    );
  },
  headerRightContainerStyle: styles.rightButtonContainer,
});
