import {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import styles from './categoryItem.styles';
import {CategoryItemProps} from './categoryItem.types';

const CategoryItem: FC<CategoryItemProps> = ({item}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Shop', {
      screen: 'Category',
      params: {
        category: item.category,
        url: item.url,
      },
    });
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
      <Text style={styles.itemTitle}>{item.category}</Text>
      <FastImage source={{uri: item.img}} style={styles.image} />
    </TouchableOpacity>
  );
};

export {CategoryItem};
