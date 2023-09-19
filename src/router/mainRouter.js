import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TabRouter from './tabRouter';
import WelcomeRouter from './welcomeRouter';

const MainStack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={'WelcomeRouter'} component={WelcomeRouter} />
      <MainStack.Screen name={'TabRouter'} component={TabRouter} />
    </MainStack.Navigator>
  );
};

export default MainRouter;
