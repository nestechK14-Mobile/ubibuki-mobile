import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import styles from '../../screens/01LogoMVT/styles';
import { useNavigation } from '@react-navigation/core';
import Login from '../02Login';

const LogoMVT = () => {
  const navigation = useNavigation();
  const pressSkip = () => {
    navigation.navigate(Login);
  };
  return (
    <ImageBackground style={styles.hinhnen} source={require('../../assets/hinhnen.png')}>
      <View style={styles.skipbutton}>
        <TouchableOpacity onPress={pressSkip}>
          <Text>SKIP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.LogoMoVie}>
        <Image source={require('../../assets/LogoTimeMovie.png')} />
      </View>
    </ImageBackground>
  );
};

export default LogoMVT;
