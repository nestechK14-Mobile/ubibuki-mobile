import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import LogoMVT from './src/screens/01LogoMVT';
import Login from './src/screens/02Login';
import AfterLogin from './src/screens/03AfterLogin';
import InputNumber from './src/screens/04InputNumber';
import OTPNumber from './src/screens/05OTPNumber';
import ChooseCity from './src/screens/06ChoseCity';
import Mainmenu from './src/screens/07Mainmenu';
import ChooseOption from './src/screens/08ChooseOption';

const MainStack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name={'LogoMVT'} component={LogoMVT} />
        <MainStack.Screen name={'Login'} component={Login} />
        <MainStack.Screen name={'AfterLogin'} component={AfterLogin} />
        <MainStack.Screen name={'InputNumber'} component={InputNumber} />
        <MainStack.Screen name={'OTPNumber'} component={OTPNumber} />
        <MainStack.Screen name={'ChoseCity'} component={ChooseCity} />
        <MainStack.Screen name={'Mainmenu'} component={Mainmenu} />
        <MainStack.Screen name={'ChooseOption'} component={ChooseOption} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
