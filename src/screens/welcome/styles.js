import { COLORS, FONTS_NAMES, SPACING } from '@/constants';
import { DEVICE, scale } from '@/utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    paddingHorizontal: SPACING.Medium
  },
  rightTitleHeader: {
    fontFamily: FONTS_NAMES.REGULAR,
    fontSize: SPACING.XMedium
  },
  bodyContainer: {
    alignItems: 'center',
    marginVertical: SPACING.XXMedium
  },
  buttonBody: {
    flexDirection: 'row',
    marginVertical: SPACING.XXLarge,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.GRAY_500,
    width: DEVICE.WIDTH - scale(45),
    paddingVertical: SPACING.Medium,
    borderRadius: SPACING.Fit
  },
  contentButtonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: scale(167),
    justifyContent: 'space-around'
  },
  containerDivide: {
    flexDirection: 'row',
    alignItems: 'center',
    width: DEVICE.WIDTH * 0.4,
    justifyContent: 'center'
  },
  lineDivide: {
    height: scale(1),
    backgroundColor: COLORS.BLACK,
    width: DEVICE.WIDTH * 0.3
  },
  titleDivide: {
    backgroundColor: COLORS.WHITE,
    width: '30%',
    textAlign: 'center',
    fontSize: SPACING.Medium
  },
  bottomContainer: {}
});

export default styles;
