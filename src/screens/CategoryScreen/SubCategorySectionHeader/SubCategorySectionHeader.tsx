import {FC} from 'react';
import {Text, View} from 'react-native';

import styles from './subCategorySectionHeader.styles';
import {SubCategorySectionHeaderProps} from './subCategorySectionHeader.types';

const SubCategorySectionHeader: FC<SubCategorySectionHeaderProps> = ({
  section,
}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{section.title}</Text>
    </View>
  );
};

export {SubCategorySectionHeader};
