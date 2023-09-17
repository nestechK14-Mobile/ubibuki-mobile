import { COLORS, FONTS_NAMES, SPACING } from '@/constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textDefault: {
    fontSize: SPACING.Medium,
    fontFamily: FONTS_NAMES.REGULAR,
    color: COLORS.BLACK
  }
});

export default styles;
