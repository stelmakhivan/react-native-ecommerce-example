import {SectionListProps} from 'react-native';

import {useCategorySectionsData} from 'hooks/useCategorySectionsData/useCategorySectionsData';

export type SubCategorySectionHeaderProps = {
  section: Parameters<
    NonNullable<
      SectionListProps<
        ReturnType<typeof useCategorySectionsData>
      >['renderSectionHeader']
    >
  >[number]['section'];
};
