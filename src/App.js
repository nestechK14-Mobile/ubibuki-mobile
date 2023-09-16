/* eslint-disable no-undef */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRouter from './router/mainRouter';
import { Text, TextInput, LogBox } from 'react-native';

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
