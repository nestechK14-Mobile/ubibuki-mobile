import { StyleSheet } from 'react-native';

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
  }
});

export default styles;
