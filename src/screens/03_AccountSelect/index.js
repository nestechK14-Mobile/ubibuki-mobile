

import React from 'react';
import { View, Text, TouchableOpacity , Image, ScrollView, SafeAreaView} from 'react-native';
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

   
<SafeAreaView>
<ScrollView>

<View  styles = {styles.mainContainer}>

<View style = {styles.container}>
<TouchableOpacity onPress = {pressNEXT}>
<View style = {styles.logoText}>
<Image source={require('../../assets/MoviesTimesLogo.png')} />
</View>
</TouchableOpacity>

<View style = {styles.TextChooseAccount}>
<Text style= {{fontWeight: 'bold', fontSize: 15,}}>Choose an account </Text>
<Text style= {{ fontSize: 15,}}> to continue to Movie Ticket booking</Text>
</View>




</View>



</View>
</ScrollView>
</SafeAreaView>








  

  );
};

export default AccountSelect;