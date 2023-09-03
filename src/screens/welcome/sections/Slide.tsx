import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Book_Tickets, Ellipse_1, Ellipse_2, IMG_BannerSample, IMG_LogoTitle } from 'assets';

const Slide = () => {
  return (
    <View style={styles.container}>
      <Image source={Ellipse_1} style={styles.image} />
      {/* <View style={styles.spacing} /> */}
      <Image source={Ellipse_2} style={styles.image} />
      {/* <View style={styles.spacing} /> */}
      <Image source={Ellipse_2} style={styles.image} />
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',     // Center vertically
  },
  image: {
    marginHorizontal: 4,  // Adjust as needed
  },
  spacing: {
    width: 8,  // Adjust as needed
  },
});
