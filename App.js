import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Splash from './src/screens/splash';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SPLASH" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
