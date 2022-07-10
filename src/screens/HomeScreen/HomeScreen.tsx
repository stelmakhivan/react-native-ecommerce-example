import {FC} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

import {Banner} from 'components/Banner/Banner';
import {Loader} from 'components/Loader/Loader';

import {useBanner} from 'hooks/useBanner/useBanner';

import styles from './homeScreen.styles';
import {TEST_ID} from './homeScreen.testID';
import {HomeScreenProps} from './homeScreen.types';

const HomeScreen: FC<HomeScreenProps> = () => {
  //TODO: useHomeScreen hook; fetch and render dynamic data from CMS; add skeleton loader
  const {data, isLoading} = useBanner();

  if (isLoading) {
    return <Loader testID={TEST_ID.LOADER} />;
  }

  return (
    <SafeAreaView style={styles.container} testID={TEST_ID.HOME_SCREEN}>
      <Banner data={data} />
    </SafeAreaView>
  );
};

export {HomeScreen};
