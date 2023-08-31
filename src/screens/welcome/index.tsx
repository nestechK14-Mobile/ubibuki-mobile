<<<<<<< HEAD
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
<<<<<<< HEAD
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

=======
import { AppLogo } from 'assets';
import { useTranslation } from 'react-i18next';
import { MText } from '../../components';

const WelcomeScreen = () => {
  const { t } = useTranslation();
>>>>>>> 45b7991f3c11a422b6f287b05dec917a258ee792
  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <AppLogo />
      <Text>{t('COMMON.HELLO')}</Text>
      <MText translate>{t('COMMON.HELLO')}</MText>
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
