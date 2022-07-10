import {FC, useMemo} from 'react';
import {Alert, Text, View} from 'react-native';

import {Button} from 'react-native-paper';
import {IPropsSwipeListView, SwipeListView} from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {BagProductHiddenItem} from 'screens/BagScreen/BagProductHiddenItem/BagProductHiddenItem';
import {BagProductItem} from 'screens/BagScreen/BagProductItem/BagProductItem';

import {useAppSelector} from 'store';
import {selectProducts, selectTotalProducts} from 'store/bag';
import {BagProduct} from 'store/bag/bag.types';
import {calculateTotalPrice} from 'utils/calculateTotalPrice/calculateTotalPrice';

import styles from './bagScreen.styles';
import {TEST_ID} from './bagScreen.testID';
import {BagScreenProps} from './bagScreen.types';

import {COLORS} from 'constants/colors';
import {SWIPE_ACTION_BUTTON_WIDTH} from 'constants/swipes';

const renderItem: IPropsSwipeListView<BagProduct>['renderItem'] = ({item}) => (
  <BagProductItem item={item} />
);

const renderHiddenItem: IPropsSwipeListView<BagProduct>['renderHiddenItem'] = ({
  item,
}) => <BagProductHiddenItem item={item} />;

const BagScreen: FC<BagScreenProps> = () => {
  const products = useAppSelector(selectProducts);
  const totalNumber = useAppSelector(selectTotalProducts);

  const totalPrice = useMemo(() => calculateTotalPrice(products), [products]);

  const handleCheckout = () => {
    Alert.alert('TODO: implement checkout logic');
  };

  if (!totalNumber) {
    //TODO: render empty placeholder
    return null;
  }

  return (
    <View style={styles.container} testID={TEST_ID.BAG_SCREEN}>
      <Text style={styles.totalText}>
        {totalNumber} Item(s) - Total £{totalPrice.toFixed(2)}
      </Text>
      <View style={styles.swipeHint}>
        <MaterialCommunityIcons name="trash-can" size={24} />
        <Text>Swipe product(s) to delete</Text>
      </View>
      <SwipeListView
        data={products}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        disableRightSwipe
        rightOpenValue={-SWIPE_ACTION_BUTTON_WIDTH}
      />
      <Button
        color={COLORS.green}
        style={styles.checkoutButton}
        onPress={handleCheckout}>
        <Text>Checkout</Text>
      </Button>
    </View>
  );
};

export {BagScreen};
