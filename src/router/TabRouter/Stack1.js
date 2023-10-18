import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import InputNumber from '../../screens/04Flatlist';

const Stack01Router = createNativeStackNavigator();

const Stack1 = () => {
  return (
    <Stack01Router.Navigator screenOptions={{ headerShown: false }}>
      <Stack01Router.Screen name={'InputNumber'} component={InputNumber} />
    </Stack01Router.Navigator>
  );
};

export default Stack1;
