
import React from 'react';

import { HomeScreen, DetailScreen, WelcomeScreen, LogInScreen, DetailScreen2, NumberLogin, VerifyNumber } from 'screens';
import { SCREEN_NAME } from '.././constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const MainStack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        animation:'none'
      }}>
      <MainStack.Screen name={SCREEN_NAME.LOGIN_SCREEN} component={LogInScreen} />
      <MainStack.Screen name={SCREEN_NAME.WELCOME_SCREEN} component={WelcomeScreen} />
      <MainStack.Screen name={SCREEN_NAME.HOME_SCREEN} component={HomeScreen} />
      <MainStack.Screen name={SCREEN_NAME.DETAIL_SCREEN1} component={DetailScreen} />
      <MainStack.Screen name={SCREEN_NAME.DETAIL_SCREEN2} component={DetailScreen2} />
      <MainStack.Screen name={SCREEN_NAME.NUMBER_LOGIN} component={NumberLogin} />
      <MainStack.Screen name={SCREEN_NAME.VERYFY_NUMBER} component={VerifyNumber} />

    </MainStack.Navigator>
  );
};

export default MainRouter;
