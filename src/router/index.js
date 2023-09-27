import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAME } from '../constants/screenNames';

import WelcomeScreen from '../screens/welcome/index';
import HomeScreen from '../screens/home/index';
import DetailScreen from '../screens/03_AccountSelect/index';

import Login from 'screens/02_Login';
import AccountSelect from 'screens/03_AccountSelect';
import TypeMobileNumber from 'screens/04_TypeMobileNumber';
import VerifyMobileNumber from 'screens/05_VerifyMobileNumber';
import CinemaLocation from 'screens/06_CinemaLocation';
import MovieSelect from 'screens/07_MovieSelect';
import MovieTimeListing from 'screens/08_MovieTimeListing';
import AboutMovie from 'screens/09_AboutMovie';
import TermAndCondition from 'screens/10_TermAndCondition';


import PrivatePolicy from 'screens/11_PrivatePolicy';
const MainStack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <MainStack.Navigator screenOptions={{ 
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    
      headerShown: false }}>

      
      
      
      <MainStack.Screen name={SCREEN_NAME.CINEMA_LOCATION} component={CinemaLocation} />
      <MainStack.Screen name={SCREEN_NAME.LOGIN} component={Login} />
      <MainStack.Screen name={SCREEN_NAME.ACCOUNT_SELECT} component={AccountSelect} />
      <MainStack.Screen name={SCREEN_NAME.TYPE_MOBILE_NUMBER} component={TypeMobileNumber} />
      <MainStack.Screen name={SCREEN_NAME.VERIFY_MOBILE_NUMBER} component={VerifyMobileNumber} />
      <MainStack.Screen name={SCREEN_NAME.MOVIE_SELECT} component={MovieSelect} />
      <MainStack.Screen name={SCREEN_NAME.MOVIE_TIME_LISTING} component={MovieTimeListing} />
      <MainStack.Screen name={SCREEN_NAME.ABOUT_MOVIE} component={AboutMovie} />
      <MainStack.Screen name={SCREEN_NAME.TERM_AND_CONTDITION} component={TermAndCondition} />
      <MainStack.Screen name={SCREEN_NAME.PRIVATE_POLICY} component={PrivatePolicy} />


      <MainStack.Screen name={SCREEN_NAME.WELCOME_SCREEN} component={WelcomeScreen} />
      <MainStack.Screen name={SCREEN_NAME.HOME_SCREEN} component={HomeScreen} />
      <MainStack.Screen name={SCREEN_NAME.DETAIL_SCREEN} component={DetailScreen} />
    </MainStack.Navigator>
  );
};

export default MainRouter;
