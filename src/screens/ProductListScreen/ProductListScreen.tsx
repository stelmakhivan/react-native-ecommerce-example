import {FC} from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  Text,
  View,
} from 'react-native';

import {Loader} from 'components/Loader/Loader';

import {useProducts} from 'hooks/useProducts/useProducts';

import {ProductItem} from './ProductItem/ProductItem';
import {STICKY_HEADER_INDICES} from './productListScreen.settings';
import styles from './productListScreen.styles';
import {TEST_ID} from './productListScreen.testID';
import {ProductListScreenProps} from './productListScreen.types';

import {Product} from '__generated__/types';

const renderItem: ListRenderItem<Product> = ({item}) => (
  <ProductItem item={item} />
);

//TODO: add sort and filter logic
const ProductListScreen: FC<ProductListScreenProps> = ({
  route: {
    params: {url},
  },
}) => {
  const {isLoading, data, refetch, isRefetching} = useProducts(url);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View testID={TEST_ID.PRODUCT_LIST_SCREEN}>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.totalItemsContainer}>
            <Text style={styles.totalItemsText}>
              {data?.length} items found
            </Text>
          </View>
        }
        numColumns={2}
        stickyHeaderIndices={STICKY_HEADER_INDICES}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
      />
    </View>
  );
};

export {ProductListScreen};
