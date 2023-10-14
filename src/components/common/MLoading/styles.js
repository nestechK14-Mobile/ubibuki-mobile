import { COLORS } from '@/constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.BLACK_500,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100000,
    ...StyleSheet.absoluteFill
  }
});

export default styles;
