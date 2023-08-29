import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { AppLogo } from 'assets';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <AppLogo />
      <Text style={{ fontSize: 100 }}>hello world</Text>
    </View>
  );
};

export default WelcomeScreen;
