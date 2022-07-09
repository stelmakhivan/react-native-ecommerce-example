import {FC} from 'react';
import {Text} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './accountScreen.styles';
import {TEST_ID} from './accountScreen.testID';
import {AccountScreenProps} from './accountScreen.types';

const AccountScreen: FC<AccountScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container} testID={TEST_ID.ACCOUNT_SCREEN}>
      <Text>AccountScreen component</Text>
    </SafeAreaView>
  );
};

export {AccountScreen};
