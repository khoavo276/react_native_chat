import {StyleSheet} from 'react-native';
import COLORS from './Colors';
import {sizeFont, sizeHeight} from '../ultils/SizeUltils';

const AppStyles = StyleSheet.create({
  colorWhite: {
    color: COLORS.white,
  },
  colorBlueViolet: {
    color: COLORS.blueViolet,
  },
  size18: {
    fontSize: sizeFont(18),
  },
  marginTop25: {
    marginTop: sizeHeight(25),
  },
});

export default AppStyles;
