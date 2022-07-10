import {FC} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';

import FastImage from 'react-native-fast-image';
import {Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Loader} from 'components/Loader/Loader';

import {useProductDetails} from 'hooks/useProductDetails/useProductDetails';

import {PRODUCT_DETAILS_SCREEN_EDGES} from './productDetailsScreen.settings';
import styles from './productDetailsScreen.styles';
import {TEST_ID} from './productDetailsScreen.testID';
import {ProductDetailsScreenProps} from './productDetailsScreen.types';

import {COLORS} from 'constants/colors';

const ProductDetailsScreen: FC<ProductDetailsScreenProps> = ({
  route: {
    params: {id},
  },
}) => {
  const {isLoading, data} = useProductDetails(id);

  const handleAddToBag = () => {
    //TODO: select size and add to bag
  };

  const handleWantsPress = () => {
    //TODO: move to hook: DRY
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView
      style={styles.container}
      edges={PRODUCT_DETAILS_SCREEN_EDGES}
      testID={TEST_ID.PRODUCT_DETAILS_SCREEN}>
      <ScrollView>
        <FastImage
          source={{uri: data?.img}}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>{data?.name}</Text>
            <Text style={styles.price}>£ {data?.price}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={handleWantsPress}>
              <MaterialCommunityIcons
                name="heart-outline"
                size={24}
                color={COLORS.black}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Button
          style={styles.addToBag}
          color={COLORS.green}
          mode="contained"
          onPress={handleAddToBag}>
          <Text style={styles.addToBagText}>Add to Bag</Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export {ProductDetailsScreen};
