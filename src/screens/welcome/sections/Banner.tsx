import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { IMG_BannerSample } from 'assets';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image source={IMG_BannerSample} />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});
