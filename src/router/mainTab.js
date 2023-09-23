import { SCREENS_NAME } from '@/constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import BookingsStack from './stack/bookingsStack';
import MovieStack from './stack/movieStack';
import ProfileStack from './stack/profileStack';
import TheaterStack from './stack/theaterStack';

const MainBottomTab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <MainBottomTab.Navigator screenOptions={{ headerShown: false }}>
      <MainBottomTab.Screen name={SCREENS_NAME.MOVIES_STACK} component={MovieStack} />
      <MainBottomTab.Screen name={SCREENS_NAME.THEATERS_STACK} component={TheaterStack} />
      <MainBottomTab.Screen name={SCREENS_NAME.BOOKINGS_STACK} component={BookingsStack} />
      <MainBottomTab.Screen name={SCREENS_NAME.PROFILE_STACK} component={ProfileStack} />
    </MainBottomTab.Navigator>
  );
};

export default MainTab;
