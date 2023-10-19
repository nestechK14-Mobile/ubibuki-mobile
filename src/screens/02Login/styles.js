import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tong: {
    backgroundColor: 'white',
    flex: 1
  },
  nut: {
    width: 64,
    alignSelf: 'flex-end',
    paddingRight: 20,
    padding: 8
  },

  styleAppLogo: {
    marginTop: 125,
    alignItems: 'center',
    justifyContent: 'center'
  },
  GGLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  ViewGGLogin: {
    margin: 10,
    backgroundColor: '#00000007',
    borderRadius: 20
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  line1: {
    fontWeight: '700',
    width: 100,
    height: 1,
    backgroundColor: 'black',
    margin: 10
  },
  MobileNumber: {
    margin: 16,
    fontWeight: '700',
    color: '#000'
  }
});

export default styles;
