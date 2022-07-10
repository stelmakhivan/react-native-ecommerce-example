import {FC} from 'react';
import {View, Text} from 'react-native';

import styles from './productListScreen.styles';
import {TEST_ID} from './productListScreen.testID';
import {ProductListScreenProps} from './productListScreen.types';

//TODO: add sort and filter logic
const ProductListScreen: FC<ProductListScreenProps> = () => {
  return (
    <View style={styles.container} testID={TEST_ID.PRODUCT_LIST_SCREEN}>
      <Text style={styles.totalItemsHeader}>4 items found</Text>
    </View>
  );
};

export {ProductListScreen};
