import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS_NAME } from '../constants/common';
import { useLayoutEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import WelcomeScreen from '@/screens';

const MainStack = createNativeStackNavigator();

const defaultConfig = {
  headerShown: false
};

const MainRouter = () => {
  useLayoutEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <MainStack.Navigator screenOptions={defaultConfig}>
      <MainStack.Screen name={SCREENS_NAME.WELCOME_SCREEN} component={WelcomeScreen} />
    </MainStack.Navigator>
  );
};

export default MainRouter;
