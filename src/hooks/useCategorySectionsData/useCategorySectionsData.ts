import {useMemo} from 'react';
import {Alert, SectionListData} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

import {ShopStackScreenProps} from 'navigators/types';

import {useNav} from 'hooks/useNav/useNav';

import {Link} from '__generated__/types';

export const useCategorySectionsData = ():
  | SectionListData<{title: string; data: Link[]}>['data']
  | void => {
  const route = useRoute<ShopStackScreenProps<'Category'>['route']>();

  const {data} = useNav();

  const navigation = useNavigation();

  const currentCategory = data?.find(
    category => category.url.toLowerCase() === route.params.url.toLowerCase(),
  );

  const listData = useMemo(
    () =>
      currentCategory?.subCategories.map(subCategory => ({
        title: subCategory.title,
        data: subCategory.links,
      })),
    [currentCategory],
  );

  if (!currentCategory || !listData) {
    Alert.alert('Oops, something went wrong', 'Please try again later', [
      {
        onPress: navigation.goBack,
      },
    ]);
    return;
  }

  return listData;
};
