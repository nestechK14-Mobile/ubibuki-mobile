import { COLORS } from '@constants/colors';
import { FONTS } from '@constants/fonts';
import { SPACING, scale } from '@utils/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
  rightTitleHeader: {
    color: COLORS.BLACK,
    fontSize: SPACING.Medium
  },
  bodyContainer: {
    alignItems: 'center',
    marginHorizontal: SPACING.Medium
  },
  buttonDefault: {
    backgroundColor: COLORS.BRIGHT_GRAY,
    width: '100%',
    padding: SPACING.Medium,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.Large,
    borderRadius: scale(10)
  },
  buttonTitleDefault: {
    color: COLORS.BLACK,
    fontSize: SPACING.Medium,
    fontFamily: FONTS.MEDIUM
  },
  buttonGoogle: {
    marginTop: SPACING.XXLarge
  },
  lineSeparate: {
    marginVertical: SPACING.XLarge,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: SPACING.Medium
  },
  line: {
    height: SPACING.Tiny,
    width: '45%',
    backgroundColor: COLORS.BLACK
  },
  middleContainer: {
    paddingHorizontal: SPACING.Medium
  },
  bottomContainer: {
    paddingHorizontal: SPACING.Medium,
    justifyContent: 'center',
    paddingBottom: SPACING.Medium,
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  titleInput: {
    color: COLORS.BLACK,
    fontSize: SPACING.XXMedium
  },
  titleDefault: {
    color: COLORS.BLACK,
    fontSize: SPACING.Medium
  },
  titleBottom: {
    color: COLORS.AIR_SUPERiORITY_BLUE,
    fontSize: SPACING.XXNormal
  },
  titleBottomUnderline: {
    color: COLORS.BLACK,
    fontSize: SPACING.XXNormal,
    textDecorationLine: 'underline',
    marginHorizontal: SPACING.Small
  },
  buttonNext: {
    borderColor: COLORS.MAGIC_POTION,
    borderWidth: scale(1),
    padding: SPACING.XNormal,
    borderRadius: 200
  }
});

export default styles;
