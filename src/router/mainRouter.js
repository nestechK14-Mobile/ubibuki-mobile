import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS_NAME } from '../constants/common';
import DummyScreen from '../screens/dummyScreen';

const MainStack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={SCREENS_NAME.DUMMY_SCREEN} component={DummyScreen} />
    </MainStack.Navigator>
  );
};

export default MainRouter;
