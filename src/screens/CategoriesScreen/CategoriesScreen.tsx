import {FC} from 'react';
import {View} from 'react-native';

import {Loader} from 'components/Loader/Loader';
import {SearchInput} from 'components/SearchInput/SearchInput';

import {useNav} from 'hooks/useNav/useNav';

import {CategoryList} from './CategoryList/CategoryList';
import styles from './categoriesScreen.styles';
import {TEST_ID} from './categoriesScreen.testID';
import {CategoriesScreenProps} from './categoriesScreen.types';

const CategoriesScreen: FC<CategoriesScreenProps> = () => {
  const {isLoading} = useNav();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.container} testID={TEST_ID.SHOP_SCREEN}>
      <SearchInput testID={TEST_ID.SEARCH_INPUT} />
      <CategoryList />
    </View>
  );
};

export {CategoriesScreen};
