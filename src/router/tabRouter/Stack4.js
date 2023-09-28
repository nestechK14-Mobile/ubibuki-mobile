import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Screen6 from '../../screens/screen6';

const Stack01Router = createNativeStackNavigator();

const Stack4 = () => {
  return (
    <Stack01Router.Navigator screenOptions={{ headerShown: false }}>
      <Stack01Router.Screen name={'Screen6'} component={Screen6} />
    </Stack01Router.Navigator>
  );
};

export default Stack4;
