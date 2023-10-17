import { COLORS, FONTS_NAMES, SPACING } from '@/constants';
import { DEVICE, scale } from '@/utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center'
  },
  rightTitleHeader: {
    fontFamily: FONTS_NAMES.REGULAR,
    fontSize: SPACING.XMedium
  },
  bodyContainer: {
    alignItems: 'center'
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
    width: scale(180),
    justifyContent: 'space-around'
  },
  containerDivide: {
    flexDirection: 'row',
    alignItems: 'center',
    width: DEVICE.WIDTH * 0.4,
    justifyContent: 'center'
  },
  lineDivide: {
    height: scale(0.5),
    backgroundColor: COLORS.BLACK,
    width: DEVICE.WIDTH * 0.45 - scale(32)
  },
  titleDivide: {
    backgroundColor: COLORS.WHITE,
    width: '30%',
    textAlign: 'center',
    fontSize: SPACING.Medium
  },
  bottomContainer: {
    alignItems: 'center',
    marginTop: SPACING.Medium,
    justifyContent: 'space-around',
    height: scale(90)
  },
  containerInput: {
    alignItems: 'flex-start',
    width: DEVICE.WIDTH - scale(32)
  },
  inputMobile: {
    backgroundColor: COLORS.GRAY_500,
    marginTop: scale(8),
    width: '100%',
    paddingHorizontal: SPACING.Medium,
    borderRadius: scale(12)
  },
  containerTitleBottom: {
    width: DEVICE.WIDTH,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: SPACING.Normal
  },
  titleBottom: {
    fontSize: scale(14),
    color: COLORS.BLACK_400,
    fontFamily: FONTS_NAMES.REGULAR
  },
  mainTitleBottom: {
    fontSize: scale(14),
    color: COLORS.BLACK,
    fontFamily: FONTS_NAMES.REGULAR,
    marginHorizontal: scale(4),
    textDecorationLine: 'underline'
  },
  buttonNext: {
    backgroundColor: COLORS.RED_500,
    padding: SPACING.Medium,
    borderRadius: SPACING.Large,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.Normal
  }
});

export default styles;
