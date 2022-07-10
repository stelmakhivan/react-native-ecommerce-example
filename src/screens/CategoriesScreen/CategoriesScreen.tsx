import {FC} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

import {SearchInput} from 'components/SearchInput/SearchInput';

import {CATEGORIES_SCREEN_EDGES} from './categoriesScreen.settings';
import styles from './categoriesScreen.styles';
import {TEST_ID} from './categoriesScreen.testID';
import {CategoriesScreenProps} from './categoriesScreen.types';

const CategoriesScreen: FC<CategoriesScreenProps> = () => {
  return (
    <SafeAreaView
      edges={CATEGORIES_SCREEN_EDGES}
      style={styles.container}
      testID={TEST_ID.SHOP_SCREEN}>
      <SearchInput testID={TEST_ID.SEARCH_INPUT} />
    </SafeAreaView>
  );
};

export {CategoriesScreen};
