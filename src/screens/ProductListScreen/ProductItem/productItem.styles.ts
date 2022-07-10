import {StyleSheet} from 'react-native';

import {DEVICE_HEIGHT, DEVICE_WIDTH} from 'constants/dimensions';

const ITEM_PADDING = 16;

const ITEM_WIDTH = DEVICE_WIDTH / 2;

const IMAGE_WIDTH = ITEM_WIDTH - ITEM_PADDING * 2;
const IMAGE_HEIGHT = DEVICE_HEIGHT / 3;
const styles = StyleSheet.create({
  item: {
    width: ITEM_WIDTH,
    padding: ITEM_PADDING,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
