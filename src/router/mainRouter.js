import React from 'react';
import DummyScreen from '../screens/dummyScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS_NAME } from '../constants/common';
import { useLayoutEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

const MainStack = createNativeStackNavigator();

const MainRouter = () => {
  useLayoutEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <MainStack.Navigator>
      <MainStack.Screen name={SCREENS_NAME.DUMMY_SCREEN} component={DummyScreen} />
    </MainStack.Navigator>
  );
};

export default MainRouter;
