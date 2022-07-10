import {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import FastImage from 'react-native-fast-image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useAppDispatch} from 'store';
import {decrementQuantity, incrementQuantity} from 'store/bag';
import {calculateTotalPrice} from 'utils/calculateTotalPrice/calculateTotalPrice';

import styles from './bagProductItem.styles';
import {BagProductItemProps} from './bagProductItem.types';

const BagProductItem: FC<BagProductItemProps> = ({item}) => {
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(item.id));
  };
  const handleDecrement = () => {
    dispatch(decrementQuantity(item.id));
  };

  return (
    <View style={styles.rowFront}>
      <FastImage source={{uri: item.img}} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{item.name}</Text>
        <Text style={styles.descriptionText}>
          £{calculateTotalPrice([item]).toFixed(2)}
        </Text>
        {/*TODO: Size*/}
        <Text style={styles.descriptionText}>Size</Text>
        <Text style={styles.descriptionText}>Colour {item.colour}</Text>
      </View>
      <View style={styles.quantityButtonsContainer}>
        <TouchableOpacity onPress={handleIncrement}>
          <MaterialCommunityIcons name="plus-circle" size={24} />
        </TouchableOpacity>
        <Text>{item.quantity}</Text>
        <TouchableOpacity
          onPress={handleDecrement}
          disabled={item.quantity === 1}>
          <MaterialCommunityIcons name="minus-circle" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {BagProductItem};
