import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import { AppLogo } from 'assets';
import styles from './../home/styles';
import styles from './../detail/styles';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <AppLogo />
      <Text >Xin chao</Text>
    </View>
  );
};

export default WelcomeScreen;
