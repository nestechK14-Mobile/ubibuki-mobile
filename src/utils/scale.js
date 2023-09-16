import { Dimensions, Platform, NativeModules } from 'react-native';
import DeviceInfo from 'react-native-device-info';
const dimensions = {};
const { width, height } = Dimensions.get('window');

dimensions.window = {
  width,
  height
};

const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;
const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export const BOTTOM_TAB_HEIGHT =
  Platform.OS === 'ios' && DeviceInfo.hasNotch() ? verticalScale(81) : verticalScale(61);

export const MARGIN_TOP_HEADER =
  DeviceInfo.hasNotch() || Platform.OS === 'ios' ? verticalScale(50) : verticalScale(16);

export const ERROR_POPUP_PADDING = DeviceInfo.hasNotch() || Platform.OS === 'ios' ? 40 : 30;

dimensions.spacing = {
  vertical: 10,
  horizontal: 15
};

const DEVICE = {
  WIDTH: width,
  HEIGHT: height
};
dimensions.borderRadius = 9;

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

export { dimensions, scale, verticalScale, moderateScale, DEVICE, STATUSBAR_HEIGHT };
