import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Screen3 from '../../screens/screen3';

const Stack01Router = createNativeStackNavigator();

const Stack1 = () => {
  return (
    <Stack01Router.Navigator screenOptions={{ headerShown: false }}>
      <Stack01Router.Screen name={'Screen3'} component={Screen3} />
    </Stack01Router.Navigator>
  );
};

export default Stack1;
