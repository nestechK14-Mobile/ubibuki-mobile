import { View, Image, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
import styles from '../../screens/01LogoMVT/styles';
import { useNavigation } from '@react-navigation/native';

const LogoMVT = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);
  return (
    <ImageBackground style={styles.hinhnen} source={require('../../assets/hinhnen.png')}>
      <View style={styles.LogoMoVie}>
        <Image source={require('../../assets/LogoTimeMovie.png')} />
      </View>
    </ImageBackground>
  );
};

export default LogoMVT;
