import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FONTS, SCREEN_NAME } from '../../constants/screenNames';
import styles from './styles';
//import { Image } from 'react-native-reanimated/lib/typescript/Animated';

const TypeMobileNumber = () => {
  const navigation = useNavigation();

  const pressNEXT = () => {
    navigation.navigate(SCREEN_NAME.TYPE_MOBILE_NUMBER);
  };

  return (
    <View>
      <TouchableOpacity
        style={{
          //backgroundColor: 'red',

          padding: 20
        }}
        onPress={pressNEXT}>
        <Image source={require('../../assets/BackVector.png')} />
      </TouchableOpacity>

      <View style= {styles.container}>
      <Text 
      style = {{fontSize: 20,
         fontFamily: FONTS.
         EXTRA_BOLD,
         alignItems: 'center'
         }}>Login With Your Phone Number</Text>
      </View>




    </View>

  );
};

export default TypeMobileNumber;
