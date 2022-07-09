import {FC} from 'react';
import {Text} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './homeScreen.styles';
import {TEST_ID} from './homeScreen.testID';
import {HomeScreenProps} from './homeScreen.types';

const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container} testID={TEST_ID.HOME_SCREEN}>
      <Text>HomeScreen component</Text>
    </SafeAreaView>
  );
};

export {HomeScreen};
