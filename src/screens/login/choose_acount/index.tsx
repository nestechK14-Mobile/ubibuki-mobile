import { Account, Ellipse, IMG_BannerSample, IMG_LogoTitle } from 'assets';
import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import ListView from './ListView';

const ChooseAcount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.container1}>
          <View>
            <Image source={IMG_LogoTitle} />
          </View>
          <View style={styles.spacing}></View>
          <View>
            <Text style={styles.text}> Choose an account</Text>
          </View>
          <View>
            <Text style={styles.text1}> to continue to Movie ticket booking</Text>
          </View>
        </View>
        <View style = {styles.margin}>
        <View>
          <ListView name={'Name'} email={'tkkien1509@gmail.com'} />
        </View>
        <View style={styles.spacing}></View>
        <View>
          <ListView name={'Name'} email={'tkkien1509@gmail.com'} />
        </View>
        <View style={styles.spacing}></View>
        <View>
          <ListView name={'Name'} email={'tkkien1509@gmail.com'} />
        </View>
        <View style = {styles.container4}>
          <Image source={Account}/>
          <Text style = {styles.text}> Add another account</Text>
        </View>
        </View>
      </View>
    </View>
  );
};

export default ChooseAcount;

const styles = StyleSheet.create({
  margin: {
    marginBottom: 240

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
    width: 320,
    height: 570,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.4)'
    // alignItems: 'center'
  },
  infoContainer1: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    // borderRadius: 10,
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.4)'
    // alignItems: 'center'
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25
  },
  container2: {
    flex: 1
    // alignItems: 'center',
    // marginTop: 25
  },
  spacing: {
    height: 10
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0,0,0,1)'
  },
  text1: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0,0,0,1)'
  },
  container4: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 5
  }
});
