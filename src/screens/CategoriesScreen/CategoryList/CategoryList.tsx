import {FC} from 'react';
import {FlatList, ListRenderItem, RefreshControl} from 'react-native';

import {useNav} from 'hooks/useNav/useNav';

import {CategoryItem} from './CategoryItem/CategoryItem';
import {ItemSeparator} from './ItemSeparator/ItemSeparator';
import styles from './categoryList.styles';
import {CategoryListProps} from './categoryList.types';

import {Nav} from '__generated__/types';

const renderItem: ListRenderItem<Nav> = ({item}) => (
  <CategoryItem item={item} />
);

const CategoryList: FC<CategoryListProps> = () => {
  const {data, refetch, isRefetching} = useNav();

  return (
    <FlatList
      style={styles.list}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
      keyboardShouldPersistTaps="handled"
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
      }
    />
  );
};

export {CategoryList};
