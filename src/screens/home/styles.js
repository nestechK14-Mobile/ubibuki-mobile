import { StyleSheet, Dimensions } from 'react-native';

const WIDTH_SCREEN = Dimensions.get('screen').width;
const HEIGTH_SCREEN = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleRightHeader: {
    fontSize: 20,
    color: 'red'
  },
  bodyContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerButton: {
    margin: 18
  },
  textDefault: {
    color: 'black'
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 200
  },
  buttonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00000012',
    width: WIDTH_SCREEN * 0.9,
    alignItems: 'center',
    paddingVertical: 16,
    justifyContent: 'center',
    borderRadius: 10
  },
  line: {
    height: 5,
    weight: 45,
    backgroundColor: 'black'
  }
});

export default styles;
