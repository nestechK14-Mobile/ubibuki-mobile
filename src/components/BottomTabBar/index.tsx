import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { IMG_LogoTitle } from '../../assets/images';
import { Booking, IC_Search, Movies, Profile, Theaters } from '../../assets/icons';

const BottomTabBar = () => {
  return (
    <View style={styles.container}>
      <View>
      <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.2}>
        <Image source={Movies } style={styles.icon} />
        <Text style={styles.Text}>Movies</Text>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.2}>
        <Image source={Theaters}  style={styles.icon} />
        <Text style={styles.Text}>Theaters</Text>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.2}>
        <Image source={Booking}  style={styles.icon} />
        <Text style={styles.Text}>Booking</Text>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.2}>
        <Image source={Profile}  style={styles.icon} />
        <Text style={styles.Text}>Profile</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
 
  },
  buttonSearch: {
    
  },
  icon: {
    width: 30, // Set the desired width
    height: 30, // Set the desired height
    marginHorizontal: 9
  },
  Text: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '400',

  },

});
