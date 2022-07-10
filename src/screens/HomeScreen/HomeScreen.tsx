import {FC, useState, useRef} from 'react';
import {RefreshControl, ScrollView, TextInput} from 'react-native';

import {Searchbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Banner} from 'components/Banner/Banner';
import {Loader} from 'components/Loader/Loader';

import {useBanner} from 'hooks/useBanner/useBanner';

import styles from './homeScreen.styles';
import {TEST_ID} from './homeScreen.testID';
import {HomeScreenProps} from './homeScreen.types';

const HomeScreen: FC<HomeScreenProps> = () => {
  //TODO: useHomeScreen hook; fetch and render dynamic data from CMS; add skeleton loader
  const {data, isLoading, refetch, isRefetching} = useBanner();
  const searchInputRef = useRef<TextInput>(null);

  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    //TODO: implement search logic; render search results
    setSearchText(text);
  };

  const handleIconPress = () => {
    searchInputRef.current?.focus();
  };

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
        <Searchbar
          ref={searchInputRef}
          value={searchText}
          placeholder="Search"
          onChangeText={handleSearch}
          onIconPress={handleIconPress}
        />
        <Banner data={data} />
      </ScrollView>
    </SafeAreaView>
  );
};

export {HomeScreen};
