import React from 'react';

import {ShowlistingContent,  AboutMovies } from '../../MoviesDetail';
import { SCREEN_NAME } from '../constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const MainStack = createNativeStackNavigator();

const Router = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <MainStack.Screen name={SCREEN_NAME.SHOWLISTING} component={ShowlistingContent} />
      <MainStack.Screen name={SCREEN_NAME.ABOUTMOVIES} component={AboutMovies} />
    </MainStack.Navigator>
  );
};

export default Router;