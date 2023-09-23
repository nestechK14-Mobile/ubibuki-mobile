import { SCREENS_NAME } from '@/constants';
import { TheatersScreen } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const TheatersStack = createNativeStackNavigator();

const TheaterStack = () => {
  return (
    <TheatersStack.Navigator screenOptions={{ headerShown: false }}>
      <TheatersStack.Screen name={SCREENS_NAME.THEATERS_SCREEN} component={TheatersScreen} />
    </TheatersStack.Navigator>
  );
};

export default TheaterStack;
