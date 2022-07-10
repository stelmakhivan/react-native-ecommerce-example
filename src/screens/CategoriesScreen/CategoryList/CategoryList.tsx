import {FC} from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  RefreshControl,
  Text,
  TouchableOpacity,
} from 'react-native';

import {useNav} from 'hooks/useNav/useNav';

import {ItemSeparator} from './ItemSeparator/ItemSeparator';
import styles from './categoryList.styles';
import {CategoryListProps} from './categoryList.types';

import {Nav} from '__generated__/types';

const renderItem: ListRenderItem<Nav> = ({item}) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.category}</Text>
      <Image source={{uri: item.img}} style={styles.image} />
    </TouchableOpacity>
  );
};

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
