import {FC} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

import {SearchInput} from 'components/SearchInput/SearchInput';

import styles from './shopScreen.styles';
import {TEST_ID} from './shopScreen.testID';
import {ShopScreenProps} from './shopScreen.types';

const ShopScreen: FC<ShopScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container} testID={TEST_ID.SHOP_SCREEN}>
      <SearchInput testID={TEST_ID.SEARCH_INPUT} />
    </SafeAreaView>
  );
};

export {ShopScreen};
