import {Platform, StyleSheet} from 'react-native';

import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  headerTitle: {
    textTransform: 'uppercase',
  },
  card: {
    backgroundColor: COLORS.white,
  },
  leftButtonContainer: {
    left: 16,
  },
  title: Platform.select({
    default: {
      textTransform: 'uppercase',
    },
    android: {
      left: 16,
      textTransform: 'uppercase',
    },
  }),
});

export default styles;
