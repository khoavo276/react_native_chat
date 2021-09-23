import {Platform, StatusBar} from 'react-native';
import {isIPhoneX} from './Devices';
import {sizeWidth} from './SizeUltils';

const STATUS_BAR_IOS_HEIGHT = isIPhoneX() ? 44 : 20;

export const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? STATUS_BAR_IOS_HEIGHT : StatusBar.currentHeight;

export const BOTTOM_BAR_HEIGHT = isIPhoneX() ? 34 : 0;

export const TOOL_BAR_HEIGHT = sizeWidth(44) + STATUS_BAR_HEIGHT;
