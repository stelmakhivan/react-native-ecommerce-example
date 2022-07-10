import {FC} from 'react';
import {Text, TouchableOpacity, Alert} from 'react-native';

import {TEST_ID} from 'components/Banner/banner.testID';

import styles from './banner.styles';
import {BannerProps} from './banner.types';

//TODO: fetch data from API; implement skeleton loader
const Banner: FC<BannerProps> = ({data}) => {
  const handlePress = () => {
    Alert.alert('TODO: navigate to product list screen');
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.banner}
      testID={TEST_ID.BANNER}>
      {data?.map((message, index) => {
        //TODO: add custom font; think about image or rendering another component
        let textStyle;
        switch (index) {
          case 0:
            textStyle = styles.textLine1;
            break;
          case 1:
            textStyle = styles.textLine2;
            break;
          case 2:
            textStyle = styles.textLine3;
            break;
          default:
            textStyle = styles.textLine1;
        }
        return (
          <Text key={`${message}-${index}`} style={textStyle}>
            {message}
          </Text>
        );
      })}
    </TouchableOpacity>
  );
};

export {Banner};
