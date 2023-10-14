/* eslint-disable no-undef */
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { BackHandler, LogBox, Text, TextInput } from 'react-native';
import MainRouter from './router/mainRouter';
import './locales/i18n';
import { Provider } from 'react-redux';
import { store } from './redux/store';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

LogBox.ignoreAllLogs();
if (!__DEV__) {
  console.log(() => {});
}

const App = () => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => backHandler.remove();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainRouter />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
