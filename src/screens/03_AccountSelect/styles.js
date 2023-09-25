import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flex:1

  },

  container: {
    marginHorizontal: 20,
   marginTop: 100,

    height: 570,
    borderRadius: 10,
    borderWidth: 1
  },

  logoText: {
    alignItems:'center', // Điều chỉnh đối tượng về giữ theo cột
    paddingTop: 20
  },

  TextChooseAccount: {
    alignItems: 'center', 
    padding: 10
  },
  accountInfo: {

    marginHorizontal:10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBlockColor: '#00000033'

    //backgroundColor: 'gray'
  },

  accountAvatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginHorizontal: 10,//resizeMode: 'contain'
    marginVertical:10,
    borderWidth:2,
    borderColor: 'red'
  },
  PolicyAndTerm:{
    padding: 20,
    flexDirection: 'row',
    flexWrap:'wrap'
  }
});

export default styles;
