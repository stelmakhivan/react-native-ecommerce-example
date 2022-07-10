import {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import upperFirst from 'lodash/upperFirst';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './subCategoryItem.styles';
import {SubCategoryItemProps} from './subCategoryItem.types';

import {COLORS} from 'constants/colors';

const SubCategoryItem: FC<SubCategoryItemProps> = ({item}) => {
  const navigation = useNavigation();

  const handlerPress = () => {
    navigation.navigate('Shop', {
      screen: 'ProductList',
      params: {
        subCategory: item.name,
        url: item.url,
      },
    });
  };

  return (
    <TouchableOpacity style={styles.row} onPress={handlerPress}>
      <Text>{upperFirst(item.name)}</Text>
      <MaterialCommunityIcons
        name="chevron-right"
        size={24}
        color={COLORS.gray}
      />
    </TouchableOpacity>
  );
};

export {SubCategoryItem};
