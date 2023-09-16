import React from 'react';
import DummyScreen from '../screens/dummyScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS_NAME } from '../constants/common';

const MainStack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={SCREENS_NAME.DUMMY_SCREEN} component={DummyScreen} />
    </MainStack.Navigator>
  );
};

export default MainRouter;
