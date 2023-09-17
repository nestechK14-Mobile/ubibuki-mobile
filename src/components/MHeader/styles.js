import { COLORS, SPACING } from '@/constants';
import { DEVICE, STATUSBAR_HEIGHT } from '@/utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: DEVICE.WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    maxHeight: STATUSBAR_HEIGHT,
    paddingHorizontal: SPACING.Medium,
    paddingVertical: SPACING.Large
  }
});

export default styles;
