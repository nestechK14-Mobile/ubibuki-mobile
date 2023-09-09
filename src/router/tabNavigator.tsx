import { SCREEN_NAMES } from '@constants/screenNames';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/home';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TAB_NAME } from '@constants/common';
import {
  IC_BookingActive,
  IC_BookingInActive,
  IC_MovieActive,
  IC_MovieInActive,
  IC_ProfileActive,
  IC_ProfileInActive,
  IC_TheatersActive,
  IC_TheatersInActive
} from '@assets/icons';
import MText from '@components/MText';
import { COLORS } from '@constants/colors';
import { SPACING, scale } from '@utils/scale';
import { MoviesScreen } from '@screens';
import { FONTS } from '@constants/fonts';
import { StyleSheet } from 'react-native';

const TabStack = createBottomTabNavigator();

const MoviesStack = createNativeStackNavigator();
const TheatersStack = createNativeStackNavigator();
const BookingsStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const defaultConfig = {
  headerShown: false,
  gestureEnabled: false
};

const MovieRouter = () => {
  return (
    <MoviesStack.Navigator screenOptions={{ ...defaultConfig }}>
      <MoviesStack.Screen name={SCREEN_NAMES.MOVIES_SCREEN} component={MoviesScreen} />
    </MoviesStack.Navigator>
  );
};

const TheatersRouter = () => {
  return (
    <TheatersStack.Navigator screenOptions={{ ...defaultConfig }}>
      <TheatersStack.Screen name={SCREEN_NAMES.HOME_SCREEN} component={HomeScreen} />
    </TheatersStack.Navigator>
  );
};

const BookingsRouter = () => {
  return (
    <BookingsStack.Navigator screenOptions={{ ...defaultConfig }}>
      <BookingsStack.Screen name={SCREEN_NAMES.HOME_SCREEN} component={HomeScreen} />
    </BookingsStack.Navigator>
  );
};

const ProfileRouter = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ ...defaultConfig }}>
      <ProfileStack.Screen name={SCREEN_NAMES.HOME_SCREEN} component={HomeScreen} />
    </ProfileStack.Navigator>
  );
};

const TabRouter = () => {
  return (
    <TabStack.Navigator screenOptions={{ ...defaultConfig }}>
      <TabStack.Screen
        name={SCREEN_NAMES.MOVIES_TAB_STACK}
        component={MovieRouter}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <MText
                style={[
                  styles.titleTab,
                  {
                    color: focused ? COLORS.MAGIC_POTION : COLORS.DARK_LIVER
                  }
                ]}>
                {TAB_NAME.MOVIES}
              </MText>
            );
          },
          tabBarIcon: ({ focused }) => {
            return focused ? <IC_MovieActive /> : <IC_MovieInActive />;
          },
          key: 1,
          headerShown: false
        }}
      />
      <TabStack.Screen
        name={SCREEN_NAMES.THEATERS_TAB_STACK}
        component={TheatersRouter}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <MText
                style={[
                  styles.titleTab,
                  {
                    color: focused ? COLORS.MAGIC_POTION : COLORS.DARK_LIVER
                  }
                ]}>
                {TAB_NAME.THEATERS}
              </MText>
            );
          },
          tabBarIcon: ({ focused }) => {
            return focused ? <IC_TheatersActive /> : <IC_TheatersInActive />;
          },
          key: 1,
          headerShown: false
        }}
      />
      <TabStack.Screen
        name={SCREEN_NAMES.BOOKINGS_TAB_STACK}
        component={BookingsRouter}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <MText
                style={[
                  styles.titleTab,
                  {
                    color: focused ? COLORS.MAGIC_POTION : COLORS.DARK_LIVER
                  }
                ]}>
                {TAB_NAME.BOOKINGS}
              </MText>
            );
          },
          tabBarIcon: ({ focused }) => {
            return focused ? <IC_BookingActive /> : <IC_BookingInActive />;
          },
          key: 1,
          headerShown: false
        }}
      />
      <TabStack.Screen
        name={SCREEN_NAMES.PROFILE_TAB_STACK}
        component={ProfileRouter}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <MText
                style={[
                  styles.titleTab,
                  {
                    color: focused ? COLORS.MAGIC_POTION : COLORS.DARK_LIVER
                  }
                ]}>
                {TAB_NAME.PROFILE}
              </MText>
            );
          },
          tabBarIcon: ({ focused }) => {
            return focused ? <IC_ProfileActive /> : <IC_ProfileInActive />;
          },
          key: 1,
          headerShown: false
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabRouter;

const styles = StyleSheet.create({
  titleTab: {
    fontFamily: FONTS.MEDIUM,
    fontSize: SPACING.XXNormal
  }
});
