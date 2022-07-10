import {FC} from 'react';
import {
  SectionList,
  SectionListProps,
  SectionListRenderItem,
  View,
} from 'react-native';

import {Divider} from 'react-native-paper';

import {useCategorySectionsData} from 'hooks/useCategorySectionsData/useCategorySectionsData';

import {SubCategoryItem} from './SubCategoryItem/SubCategoryItem';
import {SubCategorySectionHeader} from './SubCategorySectionHeader/SubCategorySectionHeader';
import styles from './categoryScreen.styles';
import {TEST_ID} from './categoryScreen.testID';
import {CategoryScreenProps} from './categoryScreen.types';

import {Link} from '__generated__/types';

const renderItem: SectionListRenderItem<Link> = ({item}) => (
  <SubCategoryItem item={item} />
);

const renderSectionHeader: SectionListProps<
  ReturnType<typeof useCategorySectionsData>
>['renderSectionHeader'] = ({section}) => (
  <SubCategorySectionHeader section={section} />
);

const CategoryScreen: FC<CategoryScreenProps> = () => {
  const data = useCategorySectionsData();

  if (!data) {
    return null;
  }

  return (
    <View style={styles.container} testID={TEST_ID.CATEGORY_SCREEN}>
      <SectionList<
        SectionListProps<ReturnType<typeof useCategorySectionsData>>['data']
      >
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};

export {CategoryScreen};
