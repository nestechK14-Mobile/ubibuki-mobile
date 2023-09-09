import React, { lazy, Suspense } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from '@constants/screenNames';
import AuthRouter from './authNavigator';
import TabRouter from './tabNavigator';

const MainStack = createNativeStackNavigator();

const defaultConfig = {
  headerShown: false,
  gestureEnabled: false
};

const MainRouter = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ ...defaultConfig }}
      initialRouteName={SCREEN_NAMES.AUTH_STACK}>
      <MainStack.Screen name={SCREEN_NAMES.AUTH_STACK} component={AuthRouter} />
      <MainStack.Screen name={SCREEN_NAMES.TAB_STACK} component={TabRouter} />
    </MainStack.Navigator>
  );
};

export default MainRouter;
