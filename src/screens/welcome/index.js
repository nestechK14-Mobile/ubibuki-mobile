import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import styles from './styles';

const WelcomeScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      {/** Header*/}
      <View style={styles.headerContainer}>
        <View />
        <TouchableOpacity>
          <Text style={styles.titleRightHeader}>SKIP</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ flexGrow: 0 }}
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
          <View style={{ height: 180, justifyContent: 'flex-end' }}>
            <Text>I agree to the Term & Conditions and Privacy Policy</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WelcomeScreen;
