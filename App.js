import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import splash from './src/screens/splash'; // Đảm bảo import màn hình mới của bạn

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SPLASH" component={splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
