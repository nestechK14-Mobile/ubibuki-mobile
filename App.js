import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListTicket from './src/screens/04InputNumber/listTicket';
import AfterLogin from './src/screens/03AfterLogin';

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

const styles = StyleSheet.create({});

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name={'AfterLogin'} component={AfterLogin} />
        <MainStack.Screen name={'ListTicket'} component={ListTicket} />
        <MainStack.Screen name={'HomeScreen'} component={HomeScreen} />
        <MainStack.Screen name={'DetailScreen'} component={DetailScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
