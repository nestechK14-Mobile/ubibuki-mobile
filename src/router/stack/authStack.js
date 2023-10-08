import { SCREENS_NAME } from '@/constants';
import { LoginWithEmailScreen, LoginWithPhoneNumberScreen, WelcomeScreen } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const AuthStacks = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <AuthStacks.Navigator screenOptions={{ headerShown: false }}>
      <AuthStacks.Screen name={SCREENS_NAME.WELCOME_SCREEN} component={WelcomeScreen} />
      <AuthStacks.Screen name={SCREENS_NAME.LOGIN_WITH_EMAIL} component={LoginWithEmailScreen} />
      <AuthStacks.Screen
        name={SCREENS_NAME.LOGIN_WITH_PHONE_NUMBER}
        component={LoginWithPhoneNumberScreen}
      />
    </AuthStacks.Navigator>
  );
};

export default AuthStack;
