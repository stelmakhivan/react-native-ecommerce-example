import {FC} from 'react';
import {Text} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {CATEGORY_SCREEN_EDGES} from 'screens/CategoryScreen/categoryScreen.settings';

import styles from './categoryScreen.styles';
import {TEST_ID} from './categoryScreen.testID';
import {CategoryScreenProps} from './categoryScreen.types';

const CategoryScreen: FC<CategoryScreenProps> = () => {
  return (
    <SafeAreaView
      style={styles.container}
      edges={CATEGORY_SCREEN_EDGES}
      testID={TEST_ID.CATEGORY_SCREEN}>
      <Text>CategoryScreen component</Text>
    </SafeAreaView>
  );
};

export {CategoryScreen};
