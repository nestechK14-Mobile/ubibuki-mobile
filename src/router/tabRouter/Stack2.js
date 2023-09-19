import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Screen4 from '../../screens/screen4';

const Stack01Router = createNativeStackNavigator();

const Stack2 = () => {
  return (
    <Stack01Router.Navigator screenOptions={{ headerShown: false }}>
      <Stack01Router.Screen name={'Screen4'} component={Screen4} />
    </Stack01Router.Navigator>
  );
};

export default Stack2;
