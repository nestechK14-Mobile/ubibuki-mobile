import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ChoseCity from '../../screens/06ChoseCity';

const Stack01Router = createNativeStackNavigator();

const Stack3 = () => {
  return (
    <Stack01Router.Navigator screenOptions={{ headerShown: false }}>
      <Stack01Router.Screen name={'ChoseCity'} component={ChoseCity} />
    </Stack01Router.Navigator>
  );
};

export default Stack3;
