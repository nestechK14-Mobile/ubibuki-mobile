import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
        <MainStack.Screen name={'HomeScreen'} component={HomeScreen} />
        <MainStack.Screen name={'DetailScreen'} component={DetailScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
