import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREEN_NAME } from './src/constants/router';
import HomeScreen from './src/screens/home';
import WelcomeScreen from './src/screens/welcome';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREEN_NAME.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={SCREEN_NAME.WELCOME_SCREEN} component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
