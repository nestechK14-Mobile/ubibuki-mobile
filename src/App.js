/* eslint-disable no-undef */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LogBox, Text, TextInput } from 'react-native';
import MainRouter from './router/mainRouter';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

LogBox.ignoreAllLogs();
if (!__DEV__) {
  console.log(() => {});
}

const App = () => {
  return (
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  );
};

export default App;
