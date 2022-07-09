import {FC} from 'react';
import {Text} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './wantsScreen.styles';
import {TEST_ID} from './wantsScreen.testID';
import {WantsScreenProps} from './wantsScreen.types';

const WantsScreen: FC<WantsScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container} testID={TEST_ID.WANTS_SCREEN}>
      <Text>WantsScreen component</Text>
    </SafeAreaView>
  );
};

export {WantsScreen};
