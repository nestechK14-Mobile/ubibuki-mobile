import { React, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FONTS, SCREEN_NAME } from '../../constants/screenNames';
import styles from './styles';
//import { Image } from 'react-native-reanimated/lib/typescript/Animated';

const TypeMobileNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  
  
  const toback = useNavigation();
  const pressBACK = () => {
    toback.navigate(SCREEN_NAME.ACCOUNT_SELECT);
    };

  const toVerifyNumber = useNavigation();
  const GoToVerifyNumber = () => {
    toVerifyNumber.navigate(SCREEN_NAME.VERIFY_MOBILE_NUMBER);
  };

  return (
    <View>
      <TouchableOpacity
        style={{
          

          padding: 20
        }}
        onPress={pressBACK}>
        <Image source={require('../../assets/BackVector.png')} />
      </TouchableOpacity>

      <View style={styles.Header}>
        <Text
          style={{
            paddingTop: 100,
            fontSize: 22,
            fontWeight: 700,
            fontFamily: FONTS.BOLD
          }}>
          Login With Your Phone Number
        </Text>
      </View>
      <View style={{ paddingLeft: 20, paddingTop: 25 }}>
        <Text style={{ fontFamily: FONTS.MEDIUM, fontWeight: 400, fontSize: 16 }}>
          Mobile phone number
        </Text>
      </View>
      <View style={styles.wrapperInputPhoneNumber}>
        <TextInput
          style={styles.inputPhoneNumber}
          placeholder="+84"
          keyboardType = "numeric"
          placeholderTextColor={'#00000050'}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
      </View>
      <TouchableOpacity 
      style={styles.verify}>
        <Text
          style={{
            fontFamily: FONTS.BOLD,
            fontWeight: 700,
            color: 'white',
            fontSize: 20,
            padding: 10
                      }}
          onPress={GoToVerifyNumber}
          >
           VERIFY
        </Text>
        
      </TouchableOpacity>
    </View>
  );
};

export default TypeMobileNumber;
