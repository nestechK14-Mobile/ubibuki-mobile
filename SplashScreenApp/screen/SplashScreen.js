import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SplashScreen from './SplashScreen'
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      // Chuyển đến màn hình chính sau khi màn hình Splash hiển thị trong 3 giây
      navigation.replace('Main');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
},

export default SplashScreen;