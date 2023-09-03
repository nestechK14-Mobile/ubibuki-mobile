import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Book_Tickets, Ellipse_1, Ellipse_2, IMG_BannerSample, IMG_LogoTitle, Line } from 'assets';

const SlideList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.2}>
          <Text style={styles.text}>Showlisting</Text>
        </TouchableOpacity>
        <View style={styles.spacing1} />
        <Image  style={styles.image} source={Line} />
      </View>
      <View style={styles.spacing} />
      <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.2}>
        <Text style={styles.text}>About Movie</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SlideList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    marginLeft: 17
    // justifyContent: 'center', // Center horizontally
    // alignItems: 'center',     // Center vertically
  },
  container1: {
    flexDirection: 'column'
  },
  image: {
    width: 85
  },
  spacing: {
    width: 32 // Adjust as needed
  },
  spacing1: {
    height: 8 // Adjust as needed
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    color: 'rgba(0,0,0,1)'
  },
  distance: {},
  buttonSearch: {}
});
