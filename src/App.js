import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRouter from './router/mainRouter';

const App = () => {
  return (
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  );
};

export default App;
