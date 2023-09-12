import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
     },
     titleRightHeader:{
        fontSize: 20,
        color: 'black'
     },
     containerAppLogo:{
        alignItems:'center',
     },
     containerButtonAction:{
        marginTop: 30,
        alignItems:'center',
     },
     buttonDefault:{
      //width '100%'
        flexDirection:'row-reverse', // nội dung trong view sẽ được nằm như thế nào, flex 1 sẽ lấy toàn màn hình
        paddingVertical: 16,// nội dung trong view sẽ cách như thế nào trong CÁI VIEW CỦA NÓ
        // margin lấy sát hơn thôi
        backgroundColor:'#00000007',
        marginBottom: 8, // cách đều từ dưới lên
        width: '100%',
        paddingHorizontal: 16,//???
        justifyContent:'center', // nội dung trong đó cách như thế nào
        alignItems:'center', // cái view nó sẽ nằm như thé nào, bình thường nó sẽ nằm dọc
        borderRadius: 10 // bo góc
     },
     buttonTitleDefault:{ // này giống tạo ra một cái mẫu chung
      color: 'black',
      fontSize: 17,
      fontWeight:'500'//không được
     },
     containerSplit: {
      marginVertical: 32,
      flexDirection: 'row',
      alignItems:'center', // cái nội dung đó nằm như thế nào trên màn hình
      justifyContent:'center' // khoảng cách giữa các nội dung trong đó
     },
     lineSlpit: {
      height: 1,
      width: 112,
      backgroundColor:'black',

     },
     textSplit: {
      color: 'black',
      fontSize: 16,
      marginHorizontal: 16 // khoảng cách từ thằng này đến thằng khác
     },
     containerPhoneNumber:{
      paddingHorizontal: 16
     },
     titlePhoneNumber:{
      color:'black',
      fontSize: 18,
      fontWeight: '500'

     },
     inputPhoneNumber:{
      color:'black',
      fontSize:15,
      fontWeight:'500',
      width:'100%'
     },
     wrapperInputPhoneNumber:{
      backgroundColor:'#00000007',
      marginTop: 24,
      paddingHorizontal: 24,
      borderRadius: 10 
     },
     bottomfont:{

     },
     bottomText:{
      flex:1,
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center',
      paddingTop: 140,
     },
     Icon:{
      height: 10,
      width: 10,

     },
     iconInside:{
     
     },
     placeHoder:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
     }



});

export default styles;
