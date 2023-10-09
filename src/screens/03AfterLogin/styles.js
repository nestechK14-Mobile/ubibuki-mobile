import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tong: {
    flex: 1
  },
  skipbutton: {
    alignSelf: 'flex-end',
    margin: 16
  },
  khungvien: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  khungvientrong: {
    borderWidth: 1,
    height: 500,
    width: 350,
    borderRadius: 16
  },
  hinhmovies: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  hinhtron: {
    flexDirection: 'row',
    marginStart: 8,
    margin: 8
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    margin: 16
  },
  bottomtext: {
    flexDirection: 'row',
    padding: 16
  },
  addText: {
    marginStart: 8
  }
});

export default styles;
