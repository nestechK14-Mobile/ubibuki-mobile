

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../constants/screenNames';

const AccountSelect = () => {
  const navigation = useNavigation();

  const pressNEXT  = () => {
    navigation.navigate(SCREEN_NAME.TYPE_MOBILE_NUMBER);
  };

  return (
    <View>
      <Text 
      style = {{padding: 10, 
        alignItems: 'center',
         fontSize: 30} }>

         AccountSelect 
         
         </Text>

      <TouchableOpacity
      onPress={pressNEXT}

      style={{ width: 100, height: 100, backgroundColor: 'yellow' }}>
      <Text style = {{padding: 10, alignItems: 'center', fontSize: 30} }>NEXT</Text>
    </TouchableOpacity>
    </View>
  );
};

export default AccountSelect;