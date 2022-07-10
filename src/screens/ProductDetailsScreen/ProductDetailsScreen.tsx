import {FC} from 'react';
import {View, Text} from 'react-native';

import styles from './productDetailsScreen.styles';
import {TEST_ID} from './productDetailsScreen.testID';
import {ProductDetailsScreenProps} from './productDetailsScreen.types';

const ProductDetailsScreen: FC<ProductDetailsScreenProps> = () => {
  return (
    <View style={styles.container} testID={TEST_ID.PRODUCT_DETAILS_SCREEN}>
      <Text>ProductDetailsScreen component</Text>
    </View>
  );
};

export {ProductDetailsScreen};
