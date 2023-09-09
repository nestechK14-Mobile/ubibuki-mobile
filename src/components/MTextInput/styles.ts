import { COLORS } from '@constants/colors';
import { FONTS } from '@constants/fonts';
import { SPACING } from '@utils/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerTextInput: {
    width: '100%',
    backgroundColor: COLORS.BRIGHT_GRAY,
    marginVertical: SPACING.Normal,
    borderRadius: SPACING.Fit,
    paddingHorizontal: SPACING.Medium
  },
  inputDefault: {
    fontSize: SPACING.Medium,
    color: COLORS.BLACK
  },
  errorDefault: {
    fontSize: SPACING.XNormal,
    color: COLORS.DEEP_CARMINE_PINK
  },
  titleInputDefault: {
    fontFamily: FONTS.MEDIUM
  }
});

export default styles;
