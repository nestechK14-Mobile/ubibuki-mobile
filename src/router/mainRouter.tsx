import React, { useLayoutEffect } from 'react';

import { HomeScreen, DetailScreen, WelcomeScreen } from 'screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParams } from 'constants';
import { SCREEN_NAME } from 'constants';
import { initLanguage } from '../i18n';

const MainStack = createNativeStackNavigator<MainStackParams>();

const defaultConfig = {
  headerShown: false,
  gestureEnabled: false
};

const MainRouter = () => {
  useLayoutEffect(() => {
    initLanguage();
  }, []);

  return (
<<<<<<< HEAD
    <MainStack.Navigator screenOptions={{ ...defaultConfig }}>
=======
    <MainStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
>>>>>>> nam_nguyen/bai_tap_01/code_ui_basic_home_screen
      <MainStack.Screen name={SCREEN_NAME.WELCOME_SCREEN} component={WelcomeScreen} />
      <MainStack.Screen name={SCREEN_NAME.HOME_SCREEN} component={HomeScreen} />
      <MainStack.Screen name={SCREEN_NAME.DETAIL_SCREEN} component={DetailScreen} />
    </MainStack.Navigator>
  );
};

export default MainRouter;
