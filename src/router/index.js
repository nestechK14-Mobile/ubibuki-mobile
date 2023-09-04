import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAME } from '../constants/screenNames';
import WelcomeScreen from '../screens/welcome/index';
import HomeScreen from '../screens/home/index';
import DetailScreen from '../screens/detail/index';

const MainStack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={SCREEN_NAME.WELCOME_SCREEN} component={WelcomeScreen} />
      <MainStack.Screen name={SCREEN_NAME.HOME_SCREEN} component={HomeScreen} />
      <MainStack.Screen name={SCREEN_NAME.DETAIL_SCREEN} component={DetailScreen} />
    </MainStack.Navigator>
  );
};

export default MainRouter;
