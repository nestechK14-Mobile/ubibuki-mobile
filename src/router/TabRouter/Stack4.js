import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Mainmenu from '../../screens/07Mainmenu';

const Stack01Router = createNativeStackNavigator();

const Stack4 = () => {
  return (
    <Stack01Router.Navigator screenOptions={{ headerShown: false }}>
      <Stack01Router.Screen name={'Mainmenu'} component={Mainmenu} />
    </Stack01Router.Navigator>
  );
};

export default Stack4;
