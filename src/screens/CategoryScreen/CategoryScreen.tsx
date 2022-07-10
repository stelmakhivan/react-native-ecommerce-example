import {FC} from 'react';
import {View, Text} from 'react-native';

import styles from './categoryScreen.styles';
import {TEST_ID} from './categoryScreen.testID';
import {CategoryScreenProps} from './categoryScreen.types';

const CategoryScreen: FC<CategoryScreenProps> = () => {
  return (
    <View style={styles.container} testID={TEST_ID.CATEGORY_SCREEN}>
      <Text>CategoryScreen component</Text>
    </View>
  );
};

export {CategoryScreen};
