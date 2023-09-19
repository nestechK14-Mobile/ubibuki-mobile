

import React from 'react';
import { View, Text, TouchableOpacity , Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../constants/screenNames';
import styles from './styles';
//import { Image } from 'react-native-reanimated/lib/typescript/Animated';

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

      style={{ width: 50, height: 50, backgroundColor: 'yellow' }}>
      <Text style = {{padding: 10, alignItems: 'center', fontSize: 30} }>NEXT</Text>
    </TouchableOpacity>

 <View styles = {styles.container}>
 <Image source={require('../../assets/MoviesTimesLogo.png')} />
 </View>

 



    </View>
  );
};

export default AccountSelect;