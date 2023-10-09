import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Stack1 from './TabRouter/Stack1';
import Stack2 from './TabRouter/Stack2';
import Stack3 from './TabRouter/Stack3';
import Stack4 from './TabRouter/Stack4';

const TabStack = createBottomTabNavigator();

const TabRouter = () => {
  return (
    <TabStack.Navigator screenOptions={{ headerShown: false }}>
      <TabStack.Screen name={'Stack01'} component={Stack1} />
      <TabStack.Screen name={'Stack02'} component={Stack2} />
      <TabStack.Screen name={'Stack03'} component={Stack3} />
      <TabStack.Screen name={'Stack04'} component={Stack4} />
    </TabStack.Navigator>
  );
};

export default TabRouter;
