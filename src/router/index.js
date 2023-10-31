import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAME } from '../constants/screenNames';
import LogoMVT from '../screens/01FlashCreen/index';
import Login from '../screens/02Login/index';
import AfterLogin from '../screens/03AfterLogin';
import InputNumber from '../screens/04Flatlist/CreenFlatlist';
import OTPNumber from '../screens/05Tab';
import ChoseCity from '../screens/06ChoseCity';
import Mainmenu from '../screens/07Mainmenu';
import ChooseOption from '../screens/08ChooseOption';
import TabRouter from './TabRouter';

const MainStack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={SCREEN_NAME.LOGO_MTV} component={LogoMVT} />
      <MainStack.Screen name={SCREEN_NAME.LOGIN} component={Login} />
      <MainStack.Screen name={SCREEN_NAME.AFTER_LOGIN} component={AfterLogin} />
      <MainStack.Screen name={SCREEN_NAME.INPUT_NUMBER} component={InputNumber} />
      <MainStack.Screen name={SCREEN_NAME.OTP_NUMBER} component={OTPNumber} />
      <MainStack.Screen name={SCREEN_NAME.CHOSE_CITY} component={ChoseCity} />
      <MainStack.Screen name={SCREEN_NAME.MAIN_MENU} component={Mainmenu} />
      <MainStack.Screen name={SCREEN_NAME.CHOOSE_OPTION} component={ChooseOption} />
    </MainStack.Navigator>
  );
};

export default MainRouter;
