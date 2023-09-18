import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { IMG_Banner } from '../../../assets/images';


const banner = () => {
  return (
    <View style={styles.container}>
      <Image source={IMG_Banner} />
    </View>
  );
};

export default banner;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
  
});