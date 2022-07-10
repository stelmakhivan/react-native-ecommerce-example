import {StyleSheet} from 'react-native';

import {DEVICE_WIDTH} from 'constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: DEVICE_WIDTH,
    aspectRatio: 2 / 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 12,
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
  },
  addToBag: {
    marginHorizontal: 16,
  },
  addToBagText: {
    textTransform: 'uppercase',
    fontSize: 16,
  },
});

export default styles;
