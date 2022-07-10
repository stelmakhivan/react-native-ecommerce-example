import {FC} from 'react';
import {RefreshControl, ScrollView} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {Banner} from 'components/Banner/Banner';
import {Loader} from 'components/Loader/Loader';
import {SearchInput} from 'components/SearchInput/SearchInput';

import {useBanner} from 'hooks/useBanner/useBanner';

import styles from './homeScreen.styles';
import {TEST_ID} from './homeScreen.testID';
import {HomeScreenProps} from './homeScreen.types';

const HomeScreen: FC<HomeScreenProps> = () => {
  //TODO: useHomeScreen hook; fetch and render dynamic data from CMS; add skeleton loader
  const {data, isLoading, refetch, isRefetching} = useBanner();

  if (isLoading) {
    return <Loader testID={TEST_ID.LOADER} />;
  }

  return (
    <SafeAreaView style={styles.container} testID={TEST_ID.HOME_SCREEN}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }>
        <SearchInput testID={TEST_ID.SEARCH_INPUT} />
        <Banner data={data} />
      </ScrollView>
    </SafeAreaView>
  );
};

export {HomeScreen};
