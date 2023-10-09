import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OTPNumber from '../../screens/05OTPNumber';

const Stack01Router = createNativeStackNavigator();

const Stack2 = () => {
  return (
    <Stack01Router.Navigator screenOptions={{ headerShown: false }}>
      <Stack01Router.Screen name={'OTPNumber'} component={OTPNumber} />
    </Stack01Router.Navigator>
  );
};

export default Stack2;
