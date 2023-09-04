import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      {/** Header*/}
      <View style={styles.headerContainer}>
        <View />
        <TouchableOpacity>
          <Text style={styles.titleRightHeader}>SKIP</Text>
        </TouchableOpacity>
      </View>
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
    </View>
  );
};

export default WelcomeScreen;
