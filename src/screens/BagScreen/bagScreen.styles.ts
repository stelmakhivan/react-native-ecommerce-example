import {StyleSheet} from 'react-native';

import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  totalText: {
    textAlign: 'center',
  },
  swipeHint: {
    flexDirection: 'row',
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: COLORS.lightGray,
    borderBottomColor: COLORS.lightGray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  checkoutButton: {
    marginVertical: 16,
  },
});

export default styles;
