import { View, Image, ImageBackground } from 'react-native';
import React from 'react';
import styles from '../../screens/01LogoMVT/styles';

const LogoMVT = () => {
  return (
    <ImageBackground style={styles.hinhnen} source={require('../../assets/hinhnen.png')}>
      <View style={styles.LogoMoVie}>
        <Image source={require('../../assets/LogoTimeMovie.png')} />
      </View>
    </ImageBackground>
  );
};

export default LogoMVT;
