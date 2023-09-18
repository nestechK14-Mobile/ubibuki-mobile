import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { IMG_LogoTitle } from '../../assets/images';
import { IC_Search } from '../../assets/icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={IMG_LogoTitle} />
      <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.5}>
        <Image source={IC_Search} />
      </TouchableOpacity> 
   </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16
  },
  buttonSearch: {}
});