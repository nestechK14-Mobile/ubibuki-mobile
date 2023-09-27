import { React, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FONTS, SCREEN_NAME } from '../../constants/screenNames';
import styles from './styles';

const VerifyMobileNumber = () => {
  const [otp1, setotp1] = useState('');
  const [otp2, setotp2] = useState('');
  const [otp3, setotp3] = useState('');
  const [otp4, setotp4] = useState('');
  const [otp5, setotp5] = useState('');
  const [otp6, setotp6] = useState('');

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
          Verify your Phone Number
        </Text>
      </View>
      <View style={{ paddingLeft: 20, paddingTop: 25 }}>
        <Text style={{ fontFamily: FONTS.MEDIUM, fontWeight: 400, fontSize: 16 }}>
          Enter the OTP sent to xxx
        </Text>
      </View>
      <View style={styles.otpFill}>
        <TextInput
          style={styles.otpnumber}
          keyboardType="numeric"
          value={otp1}
          onChangeText={text => setotp1(text)}
          maxLength={1}
          textAlign="center"
         
        />

        <TextInput
        style={styles.otpnumber}
        keyboardType="numeric"
        value={otp2}
        onChangeText={text => setotp2(text)}
        maxLength={1}
        textAlign="center"
      />


      <TextInput
      style={styles.otpnumber}
      keyboardType="numeric"
      value={otp3}
      onChangeText={text => setotp3(text)}
      maxLength={1}
      textAlign="center"
    />

      </View>

      <TouchableOpacity style={styles.verify}>
        <Text
          style={{
            fontFamily: FONTS.BOLD,
            fontWeight: 700,
            color: 'white',
            fontSize: 20,
            padding: 10
          }}
          onPress={GoToVerifyNumber}>
          VERIFY
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyMobileNumber;
