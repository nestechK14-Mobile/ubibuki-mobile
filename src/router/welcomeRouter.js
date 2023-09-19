import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';

const WelcomeStack = createNativeStackNavigator();

const WelcomeRouter = () => {
  return (
    <WelcomeStack.Navigator screenOptions={{ headerShown: false }}>
      <WelcomeStack.Screen name={'Screen1'} component={Screen1} />
      <WelcomeStack.Screen name={'Screen2'} component={Screen2} />
    </WelcomeStack.Navigator>
  );
};

export default WelcomeRouter;
