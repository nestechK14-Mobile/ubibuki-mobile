import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRouter from './router';
import { LogBox, Text, TextInput } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { RootSiblingParent } from 'react-native-root-siblings';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface TextWithDefaultProps extends Text {
  defaultProps?: { allowFontScaling?: boolean };
}
interface TextInputWithDefaultProps extends TextInput {
  defaultProps?: { allowFontScaling?: boolean };
}

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps || {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling = false;

(TextInput as unknown as TextInputWithDefaultProps).defaultProps =
  (TextInput as unknown as TextInputWithDefaultProps).defaultProps || {};
(TextInput as unknown as TextInputWithDefaultProps).defaultProps!.allowFontScaling = false;

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
  console.log(() => {});
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootSiblingParent>
          <MainRouter />
        </RootSiblingParent>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
