import {FC} from 'react';
import {View, Text} from 'react-native';

import {Loader} from 'components/Loader/Loader';

import {useProducts} from 'hooks/useProducts/useProducts';

import styles from './productListScreen.styles';
import {TEST_ID} from './productListScreen.testID';
import {ProductListScreenProps} from './productListScreen.types';

//TODO: add sort and filter logic
const ProductListScreen: FC<ProductListScreenProps> = ({
  route: {
    params: {url},
  },
}) => {
  const {isLoading, data} = useProducts(url);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.container} testID={TEST_ID.PRODUCT_LIST_SCREEN}>
      <Text style={styles.totalItemsHeader}>{data?.length} items found</Text>
    </View>
  );
};

export {ProductListScreen};
