import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Screen5 from '../../screens/screen5';

const Stack01Router = createNativeStackNavigator();

const Stack3 = () => {
  return (
    <Stack01Router.Navigator screenOptions={{ headerShown: false }}>
      <Stack01Router.Screen name={'Screen5'} component={Screen5} />
    </Stack01Router.Navigator>
  );
};

export default Stack3;
