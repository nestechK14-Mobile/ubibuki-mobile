import { StyleSheet, Dimensions } from 'react-native';

const WIDTH_SCREEN = Dimensions.get('screen').width;
const HEIGHT_SCREEN = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  containerButton: {
    margin: 18
  },
  buttonDefault: {
    alignItems: 'center',
    backgroundColor: '#00000012',
    borderRadius: 10,
    width: WIDTH_SCREEN * 0.9,
    justifyContent: 'center',
    paddingVertical: 16
  },
  buttonGoogle: {
    flexDirection: 'row'
  },
  buttonEmail: {
    marginTop: 32
  },
  textDefault: {
    color: 'black'
  },
  buttonTitle: {
    fontSize: 17,
    fontWeight: '500'
  },
  line: {
    height: 1,
    width: '45%',
    backgroundColor: 'black',
    marginHorizontal: 16
  },
  containerDivide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 16
  }
});

export default styles;
