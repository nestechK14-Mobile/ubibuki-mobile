import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator();

const DetailScreen = () => {
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

const WelcomeScreen = () => {
  return (
    <View>
      <Text>WelcomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

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
