import { COLORS, SPACING } from '@/constants';
import { DEVICE } from '@/utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: DEVICE.WIDTH,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: SPACING.Medium,
    paddingVertical: SPACING.XXNormal
  }
});

export default styles;
