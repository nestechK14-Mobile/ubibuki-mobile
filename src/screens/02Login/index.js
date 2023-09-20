import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../02Login/styles';

const Login = () => {
  return (
    <View style={styles.tong}>
      <View style={styles.styleAppLogo}>
        <Image source={require('../../assets/appLogo.png')} />
      </View>

      <View style={styles.ViewGGLogin}>
        <TouchableOpacity style={styles.GGLogin}>
          <Image source={require('../../assets/hinhGG.png')} />
          <Text>Log With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
