import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    Header: {
        
        //backgroundColor: 'red',
        position: 'relative',
        alignItems: 'center'
      },
      otpFill: {
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: '#00000017',
        marginTop: 24,
        marginHorizontal: 10,
        justifyContent: 'center',
      },
    otpnumber: {
      borderRadius: 10,
      backgroundColor: '#00000017',
      marginHorizontal: 5,
        color: 'black',
        fontSize: 18,
        width: 50,
        fontWeight: '500'
      },
      verify:{
        alignItems: 'center',
        backgroundColor: '#F84464',
        marginTop: 24,
        marginHorizontal: 24,
        borderRadius: 10
      }

});

export default styles;
