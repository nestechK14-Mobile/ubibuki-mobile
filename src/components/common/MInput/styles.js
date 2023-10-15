import { FONTS_NAMES } from '@/constants';
import { scale } from '@/utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  errorText: {
    color: 'red',
    fontSize: scale(13),
    fontFamily: FONTS_NAMES.REGULAR
  }
});

export default styles;
