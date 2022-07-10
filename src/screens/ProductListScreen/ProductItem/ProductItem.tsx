import {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import FastImage from 'react-native-fast-image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './productItem.styles';
import {ProductItemProps} from './productItem.types';

import {COLORS} from 'constants/colors';

//TODO: add dynamic color base on want-list status; allow user to change currency
const ProductItem: FC<ProductItemProps> = ({item}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <FastImage
        source={{uri: item.img}}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.row}>
        <Text>£ {item.price}</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="heart-outline"
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>
      </View>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

export {ProductItem};
