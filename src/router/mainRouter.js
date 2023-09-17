import React, { useLayoutEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import { WelcomeScreen } from '@/screens';
import { SCREENS_NAME } from '@/constants';

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
