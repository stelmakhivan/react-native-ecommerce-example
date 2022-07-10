import {FC} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

import {Loader} from 'components/Loader/Loader';
import {SearchInput} from 'components/SearchInput/SearchInput';

import {useNav} from 'hooks/useNav/useNav';

import {CategoryList} from './CategoryList/CategoryList';
import {CATEGORIES_SCREEN_EDGES} from './categoriesScreen.settings';
import styles from './categoriesScreen.styles';
import {TEST_ID} from './categoriesScreen.testID';
import {CategoriesScreenProps} from './categoriesScreen.types';

const CategoriesScreen: FC<CategoriesScreenProps> = () => {
  const {isLoading} = useNav();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView
      edges={CATEGORIES_SCREEN_EDGES}
      style={styles.container}
      testID={TEST_ID.SHOP_SCREEN}>
      <SearchInput testID={TEST_ID.SEARCH_INPUT} />
      <CategoryList />
    </SafeAreaView>
  );
};

export {CategoriesScreen};
