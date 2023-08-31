<<<<<<< HEAD
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { AppLogo } from '../../assets';
=======
import { View, Text, Image, SafeAreaView, Button } from 'react-native';
import React from 'react';
import { LogoTitle } from '../../assets/images';
import Header from '../../components/Header';
import styles from './styles';
import Banner from './sections/Banner';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../constants';
>>>>>>> nam_nguyen/bai_tap_01/code_ui_basic_home_screen

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate(SCREEN_NAME.HOME_SCREEN);
  };

  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <AppLogo />
    </View>
=======
    <SafeAreaView style={styles.container}>
      <Header />
      <Banner />
    </SafeAreaView>
>>>>>>> nam_nguyen/bai_tap_01/code_ui_basic_home_screen
  );
};

export default WelcomeScreen;
