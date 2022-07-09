import {FC} from 'react';
import {Text} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './shopScreen.styles';
import {TEST_ID} from './shopScreen.testID';
import {ShopScreenProps} from './shopScreen.types';

const ShopScreen: FC<ShopScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container} testID={TEST_ID.SHOP_SCREEN}>
      <Text>ShopScreen component</Text>
    </SafeAreaView>
  );
};

export {ShopScreen};
