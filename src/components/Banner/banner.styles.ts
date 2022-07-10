import {StyleSheet} from 'react-native';

import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  banner: {
    backgroundColor: COLORS.pink,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLine1: {
    fontSize: 28,
    fontWeight: '600',
    color: 'orange',
    textAlign: 'center',
    marginBottom: 10,
  },
  textLine2: {
    fontSize: 34,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: 10,
  },
  textLine3: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default styles;
