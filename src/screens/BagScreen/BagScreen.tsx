import {FC} from 'react';
import {Text} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './bagScreen.styles';
import {TEST_ID} from './bagScreen.testID';
import {BagScreenProps} from './bagScreen.types';

const BagScreen: FC<BagScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container} testID={TEST_ID.BAG_SCREEN}>
      <Text>BagScreen component</Text>
    </SafeAreaView>
  );
};

export {BagScreen};
