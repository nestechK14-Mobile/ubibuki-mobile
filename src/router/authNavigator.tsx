import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParams } from '@constants/types';
import { SCREEN_NAMES } from '@constants/screenNames';
import WelcomeScreen from '@screens/welcome';
import HomeScreen from '@screens/home';
import DetailScreen from '@screens/detail';

const MainStack = createNativeStackNavigator<MainStackParams>();

const defaultConfig = {
  headerShown: false,
  gestureEnabled: false
};

const AuthRouter = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ ...defaultConfig }}
      initialRouteName={SCREEN_NAMES.WELCOME_SCREEN}>
      <MainStack.Screen name={SCREEN_NAMES.WELCOME_SCREEN} component={WelcomeScreen} />
      <MainStack.Screen name={SCREEN_NAMES.HOME_SCREEN} component={HomeScreen} />
      <MainStack.Screen name={SCREEN_NAMES.DETAIL_SCREEN} component={DetailScreen} />
    </MainStack.Navigator>
  );
};

export default AuthRouter;
