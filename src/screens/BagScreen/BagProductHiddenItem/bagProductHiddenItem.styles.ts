import {StyleSheet} from 'react-native';

import {COLORS} from 'constants/colors';
import {SWIPE_ACTION_BUTTON_WIDTH} from 'constants/swipes';

const styles = StyleSheet.create({
  rowBack: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: COLORS.white,
  },
  deleteButton: {
    backgroundColor: COLORS.danger,
    paddingHorizontal: 16,
    width: SWIPE_ACTION_BUTTON_WIDTH,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteText: {
    color: COLORS.white,
  },
});

export default styles;
