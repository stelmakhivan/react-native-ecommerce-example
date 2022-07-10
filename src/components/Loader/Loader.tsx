import {FC} from 'react';

import {ActivityIndicator} from 'react-native-paper';

import {TEST_ID} from 'components/Loader/loader.testID';

import styles from './loader.styles';
import {LoaderProps} from './loader.types';

const Loader: FC<LoaderProps> = () => {
  return (
    <ActivityIndicator
      style={styles.container}
      size="large"
      animating={true}
      testID={TEST_ID.LOADER}
    />
  );
};

export {Loader};
