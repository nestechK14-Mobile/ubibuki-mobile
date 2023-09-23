import { SCREENS_NAME } from '@/constants';
import { MovieDetailScreen, MoviesScreen } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const MoviesStack = createNativeStackNavigator();

const MovieStack = () => {
  return (
    <MoviesStack.Navigator screenOptions={{ headerShown: false }}>
      <MoviesStack.Screen name={SCREENS_NAME.MOVIES_SCREEN} component={MoviesScreen} />
      <MoviesStack.Screen name={SCREENS_NAME.MOVIE_DETAIL_SCREEN} component={MovieDetailScreen} />
    </MoviesStack.Navigator>
  );
};

export default MovieStack;
