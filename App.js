import { View, Text, Button } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Đến màn Detail" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

const DetailScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>DetailScreen</Text>
      <Button title="Về màn Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name={'Home'} component={HomeScreen} />
        <MainStack.Screen name={'Detail'} component={DetailScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
