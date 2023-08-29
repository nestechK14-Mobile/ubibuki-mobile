import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox, Text, TextInput } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainRouter from './router';

interface TextWithDefaultProps extends Text {
  defaultProps?: { allowFontScaling?: boolean };
}
interface TextInputWithDefaultProps extends TextInput {
  defaultProps?: { allowFontScaling?: boolean };
}

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps || {};
(Text as unknown as TextWithDefaultProps).defaultProps.allowFontScaling = false;

(TextInput as unknown as TextInputWithDefaultProps).defaultProps =
  (TextInput as unknown as TextInputWithDefaultProps).defaultProps || {};
(TextInput as unknown as TextInputWithDefaultProps).defaultProps.allowFontScaling = false;

LogBox.ignoreAllLogs();
if (__DEV__) {
  if (!console.assert) {
    console.assert = (condition, message) => {
      if (!condition) {
        throw new Error(
          typeof message === 'string'
            ? `Assertion failed: ${message}`
            : 'Assertion failed: console.assert'
        );
      }
    };
  }
  console.log(() => null);
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <RootSiblingParent>
        <Provider store={store}>
          <MainRouter />
        </Provider>
      </RootSiblingParent>
    </NavigationContainer>
  );
};

export default App;
