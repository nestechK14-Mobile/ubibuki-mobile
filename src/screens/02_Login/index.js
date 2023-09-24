import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, TextInput, ScrollView, Platform } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../constants/screenNames';
{/** Hàm PressSKIP trỏ vào phương thức navigate trong class useNavigation để chọn màn hình theo MainStack */}
const Login = () => {

  const [phoneNumber, setPhoneNumber] = useState('');

  const navigation = useNavigation(); /* !!!: tạo biến chứa kết quả hàm NAVIGATION */
  const pressSKIP = () => {  
    navigation.navigate(SCREEN_NAME.ACCOUNT_SELECT);
   
  };
  
  const ToTermPage = useNavigation();
  const PressTerm = () => {
  ToTermPage.navigate(SCREEN_NAME.TERM_AND_CONTDITION)

};
const ToPolicy= useNavigation();
const PressPolicy = () => {
  ToPolicy.navigate(SCREEN_NAME.PRIVATE_POLICY)

};
  return (
    
    <View style={styles.container}>
    <StatusBar  backgroundColor={'orange'} />
         {/** Header*/}
      <View style={styles.headerContainer}>
  

        <View />
         <TouchableOpacity 
      style={styles.touchSkip}
      onPress={pressSKIP} >
       {/** Khi nhấn nút SKIP thì chạy hàm PressSKIP*/}
        <Text style={styles.titleRightHeader}>SKIP</Text>
      </TouchableOpacity>
     
         </View>


      <ScrollView
      
        style={{ flexGrow: 1 }}
        contentContainerStyle={{ paddingVertical: 32 }}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        {/** Image App Logo*/}
        <View style={styles.containerAppLogo}>
          <Image source={require('../../assets/appLogo.png')} />
       
        </View>
        {/** Button Action*/}
        <View style={styles.containerButtonAction}>
          <TouchableOpacity style={[styles.buttonDefault]}>
            <Image source={require('../../assets/google.png')} />
            <Text style={[styles.titleButtonDefault, { marginLeft: 8 }]}>Log with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonDefault]}>
            <Text style={styles.titleButtonDefault}>Log with Email</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerSplit}>
          <View style={styles.lineSplit} />
          <Text style={styles.textSplit}>or</Text>
          <View style={styles.lineSplit} />
        </View>
        <View style={styles.containerPhoneNumber}>
          <Text style={styles.titlePhoneNumber}>Mobile Number</Text>
          <View style={styles.wrapperInputPhoneNumber}>
            <TextInput
              style={styles.inputPhoneNumber}
              placeholder="+84"
              placeholderTextColor={'#00000050'}
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={{     flexDirection: 'row',
          height: 130, alignItems: 'flex-end' }}>
            <Text>I agree to the</Text>
            <TouchableOpacity onPress={PressTerm}>
            <Text style= {{fontWeight: 'bold'}}>Term & Conditions</Text>
            </TouchableOpacity>
           
            <Text> and </Text>

            <TouchableOpacity onPress={PressPolicy}>
            <Text style= {{fontWeight: 'bold'}}>Privacy Policy</Text>
                        </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
