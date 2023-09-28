import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Stack1 from './tabRouter/Stack1';
import Stack2 from './tabRouter/Stack2';
import Stack3 from './tabRouter/Stack3';
import Stack4 from './tabRouter/Stack4';

const TabStack = createBottomTabNavigator();

const Bottomtab = () => {
  return (
    <TabStack.Navigator screenOptions={{
      tabBarShowLabel: false,
      headerShown: false }}>
      <TabStack.Screen name={'Movies'} component={Stack1} />
      <TabStack.Screen name={'Theater'} component={Stack2} />
      <TabStack.Screen name={'Booking'} component={Stack3} />
      <TabStack.Screen name={'Profile'} component={Stack4} />
    </TabStack.Navigator>
  );
};

export default Bottomtab;
