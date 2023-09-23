import { SCREENS_NAME } from '@/constants';
import { ProfileScreen } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const ProfilesStack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <ProfilesStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfilesStack.Screen name={SCREENS_NAME.PROFILE_SCREEN} component={ProfileScreen} />
    </ProfilesStack.Navigator>
  );
};

export default ProfileStack;
