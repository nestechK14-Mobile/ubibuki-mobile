import { View, Image, Text, TouchableOpacity } from 'react-native';
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
    <View>
      <TouchableOpacity onPress={pressSkip}>
        <Text style={styles.buttonSkip}>SKIP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoMVT;
