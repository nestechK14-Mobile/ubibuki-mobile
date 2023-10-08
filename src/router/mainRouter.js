import { SCREENS_NAME, SCREEN_STACK } from '@/constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useLayoutEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainTab from './mainTab';
import AuthStack from './stack/authStack';

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
      <MainStack.Screen name={SCREEN_STACK.AUTH_STACK} component={AuthStack} />
      <MainStack.Screen name={SCREEN_STACK.TAB_STACK} component={MainTab} />
    </MainStack.Navigator>
  );
};

export default MainRouter;
