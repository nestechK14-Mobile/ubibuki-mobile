import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

const WelcomeScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView style={{ flexGrow: 0 }} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <Text style={styles.titleRightHeader}>SKIP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerAppLogo}>
          <Image source={require('../../assets/app.png')} />
        </View>
        <View style={styles.containerButtonAction}>
          <TouchableOpacity style={styles.buttonDefault}>
            <Text style={styles.buttonTitleDefault}>Log With Google</Text>
            <Image source={require('../../assets/hinhGG.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDefault}>
            <Text style={styles.buttonTitleDefault}>Log With Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerSplit}>
          <View style={styles.lineSlpit} />
          <Text style={styles.textSplit}>or</Text>
          <View style={styles.lineSlpit} />
        </View>
        <View style={styles.containerPhoneNumber}>
          <Text style={styles.titlePhoneNumber}>Mobile Number</Text>
          <View style={styles.wrapperInputPhoneNumber}>
            <View style={styles.placeHoder}>
              <TextInput
                style={styles.inputPhoneNumber}
                placeholder="+84"
                placeholderTextColor={'#00000050'}
                value={phoneNumber}
                onChangeText={text => setPhoneNumber(text)}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomText}>
          <Text style={styles.bottomfont}>I agree to the Term & Conditions and Privacy Policy</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default WelcomeScreen;
