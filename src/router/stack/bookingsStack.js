import { SCREENS_NAME } from '@/constants';
import { BookingDetailScreen, BookingScreen } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const BookingStack = createNativeStackNavigator();

const BookingsStack = () => {
  return (
    <BookingStack.Navigator screenOptions={{ headerShown: false }}>
      <BookingStack.Screen name={SCREENS_NAME.BOOKINGS_SCREEN} component={BookingScreen} />
      <BookingStack.Screen
        name={SCREENS_NAME.BOOKING_DETAIL_SCREEN}
        component={BookingDetailScreen}
      />
    </BookingStack.Navigator>
  );
};

export default BookingsStack;
