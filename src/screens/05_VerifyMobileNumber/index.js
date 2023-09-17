
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../constants/screenNames';

const VerifyMobileNumber = () => {
  const navigation = useNavigation();

  const pressNEXT  = () => {
    navigation.navigate(SCREEN_NAME.CINEMA_LOCATION);
  };

  return (
    <View>
      <Text 
      style = {{padding: 10, 
        alignItems: 'center',
         fontSize: 30} }>

         VerifyMobileNumber
         
         </Text>

      <TouchableOpacity
      onPress={pressNEXT}

      style={{ width: 100, height: 100, backgroundColor: 'green' }}>
      <Text style = {{padding: 10, alignItems: 'center', fontSize: 30} }>NEXT</Text>
    </TouchableOpacity>
    </View>
  );
};

export default VerifyMobileNumber;

