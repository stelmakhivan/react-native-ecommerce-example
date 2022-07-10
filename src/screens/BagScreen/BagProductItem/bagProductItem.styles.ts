import {StyleSheet} from 'react-native';

import {COLORS} from 'constants/colors';
import {SWIPE_ACTION_BUTTON_WIDTH} from 'constants/swipes';

const styles = StyleSheet.create({
  rowFront: {
    backgroundColor: COLORS.white,
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 1,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    height: 180,
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    flexShrink: 1,
    width: SWIPE_ACTION_BUTTON_WIDTH,
    aspectRatio: 2 / 3,
  },
  descriptionContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  descriptionText: {
    marginBottom: 8,
  },
  quantityButtonsContainer: {
    flexShrink: 1,
    alignItems: 'center',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});

export default styles;
