import {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useAppDispatch} from 'store';
import {removeFromBag} from 'store/bag';

import styles from './bagProductHiddenItem.styles';
import {BagProductHiddenItemProps} from './bagProductHiddenItem.types';

import {COLORS} from 'constants/colors';

const BagProductHiddenItem: FC<BagProductHiddenItemProps> = ({item}) => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeFromBag(item.id));
  };

  return (
    <View style={styles.rowBack}>
      <TouchableOpacity style={styles.deleteButton} onPress={handleRemove}>
        <MaterialCommunityIcons
          name="trash-can"
          size={24}
          color={COLORS.white}
        />
        <Text style={styles.deleteText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export {BagProductHiddenItem};
