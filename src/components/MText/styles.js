import { FONTS_NAMES } from '@/constants/common';
import { SPACING } from '@/constants/sizes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textDefault: {
    fontSize: SPACING.Medium,
    fontFamily: FONTS_NAMES.REGULAR
  }
});

export default styles;
