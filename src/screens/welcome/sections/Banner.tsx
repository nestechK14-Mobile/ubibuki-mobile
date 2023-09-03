import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { Book_Tickets, IMG_BannerSample } from 'assets';

interface BannerProps {
  source: ImageSourcePropType;
}

const Banner = ({ source }: BannerProps) => {
  return (
    <View style={styles.container}>
      <Image source={source} />
      
    </View>
    
  );
};


export default Banner;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 16
  
  }
});
