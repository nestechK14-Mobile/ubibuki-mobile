import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { IMG_LogoTitle } from '../../assets/images';
import { IC_Search } from '../../assets/icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={IMG_LogoTitle} />
      <Image source={IC_Search} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row'
    

  }
});