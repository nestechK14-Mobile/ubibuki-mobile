import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const WIDTH_SCREEN = Dimensions.get('screen').width;
const HEIGHT_SCREEN = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: StatusBar.currentHeight
  },
  titleRightHeader: {
    fontSize: 20,
    color: 'red',
    fontWeight: '400'
  },
  bodyContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
