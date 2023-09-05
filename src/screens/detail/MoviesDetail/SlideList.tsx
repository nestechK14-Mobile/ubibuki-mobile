import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Line } from 'assets';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../../constants';




const SlideList = () => {
  const navigation = useNavigation();
  const navigateToShowlisting = () => {
    navigation.navigate(SCREEN_NAME.SHOWLISTING);
  };
  const navigateToAboutMovie = () => {
    navigation.navigate(SCREEN_NAME.ABOUTMOVIES);
  }
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.2} onPress={navigateToShowlisting} >
          <Text style={styles.text}>Showlisting</Text>
        </TouchableOpacity>
        <View style={styles.spacing1} />
        <Image  style={styles.image} source={Line} />
      </View>
      <View style={styles.spacing} />
      <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.2}  onPress={navigateToAboutMovie}>
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
