import {StyleSheet} from 'react-native';

import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  list: {
    paddingTop: 18,
  },
  itemContainer: {
    backgroundColor: COLORS.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    paddingHorizontal: 24,
    paddingVertical: 36,
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  image: {
    aspectRatio: 1,
  },
});
export default styles;
