

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../constants/screenNames';

const PrivatePolicy = () => {
  const navigation = useNavigation();

  const pressNEXT  = () => {
    navigation.navigate(SCREEN_NAME.LOGIN);
  };

  return (
    <View>
      <Text 
      style = {{padding: 10, 
        alignItems: 'center',
         fontSize: 30} }>

         PrivatePolicy         
         </Text>

      <TouchableOpacity
      onPress={pressNEXT}

      style={{ width: 100, height: 100, backgroundColor: 'pink' }}>
      <Text style = {{padding: 10, alignItems: 'center', fontSize: 30} }>EXIT</Text>
    </TouchableOpacity>
    </View>
  );
};

export default PrivatePolicy;

