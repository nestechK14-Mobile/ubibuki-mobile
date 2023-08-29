import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { AppLogo } from 'assets';
import { useTranslation } from 'react-i18next';
import { MText } from '../../components';

const WelcomeScreen = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <AppLogo />
      <Text>{t('COMMON.HELLO')}</Text>
      <MText translate>{t('COMMON.HELLO')}</MText>
    </View>
  );
};

export default WelcomeScreen;
