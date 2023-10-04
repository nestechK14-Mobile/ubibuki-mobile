import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MainRouter from './src/router/mainRouter';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);
  //   return () => backHandler.remove();
  // }, []);

  return (
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  );
};

export default App;
