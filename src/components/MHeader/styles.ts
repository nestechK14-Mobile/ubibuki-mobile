import { COLORS } from '@constants/colors';
import { SIZES } from '@constants/sizes';
import { SPACING } from '@utils/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.Medium
  },
  rightTitle: {
    fontSize: SPACING.Medium,
    color: COLORS.BLACK
  }
});

export default styles;
