import { View, Text, Image, SafeAreaView, Button } from 'react-native';
import React from 'react';
import { LogoTitle } from '../../assets/images';
import Header from '../../components/Header';
import styles from './styles';
import Banner from './sections/Banner';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../constants';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate(SCREEN_NAME.HOME_SCREEN);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Banner />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
