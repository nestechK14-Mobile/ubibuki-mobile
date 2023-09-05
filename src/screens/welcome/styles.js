import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative'
  },
  headerContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%'
  },
  titleRightHeader: {
    fontSize: 20,
    color: 'black'
  },
  containerAppLogo: {
    alignItems: 'center'
  },
  containerButtonAction: {
    marginTop: 30,
    alignItems: 'center',
    paddingHorizontal: 16
  },
  buttonDefault: {
    flexDirection: 'row',
    paddingVertical: 16,
    backgroundColor: '#00000007',
    marginBottom: 12,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  titleButtonDefault: {
    color: 'black',
    fontSize: 17,
    fontWeight: '500'
  },
  containerSplit: {
    marginVertical: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lineSplit: {
    height: 1,
    width: 112,
    backgroundColor: 'black'
  },
  textSplit: {
    color: 'black',
    fontSize: 16,
    marginHorizontal: 16
  },
  containerPhoneNumber: {
    paddingHorizontal: 16
  },
  titlePhoneNumber: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500'
  },
  inputPhoneNumber: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500'
  },
  wrapperInputPhoneNumber: {
    backgroundColor: '#00000007',
    marginTop: 24,
    paddingHorizontal: 24,
    borderRadius: 10
  },
  bottomContainer: {
    alignItems: 'center'
  }
});

export default styles;
