import { Account, Ellipse, IMG_BannerSample, IMG_LogoTitle, Line, Line1 } from 'assets';
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
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
        <View style={styles.margin}>
          <ListView name={'Trung Kien'} email={'tkkien1509@gmail.com'} />
          <View style={styles.spacing}></View>
          <ListView name={'Trung Kien'} email={'tkkien1509@gmail.com'} />
          <View style={styles.spacing}></View>
          <ListView name={'Trung Kien'} email={'tkkien1509@gmail.com'} />
          <View style={styles.spacing}></View>
          <View style={styles.container4}>
            <Image source={Account} />
            <View style={styles.spacingWidth}></View>
            <Text style={styles.text}> Add another account</Text>
          </View>
          <View style={styles.container5}>
            <Image source={Line1} style={styles.image} />
          </View>
          <View style={styles.spacing}></View>
          <View style={styles.container4}>
            <Text style={styles.text2}>
              To contine, Google will Share your name, email address and profile picture with Movies Time. Before using this app, review its Privacy Policy and Terms of Service
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChooseAcount;

const styles = StyleSheet.create({
  margin: {
    marginTop: 32
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
    height: 520,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.4)'
  },
  infoContainer1: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.4)'
  },
  container1: {
    alignItems: 'center',
    marginTop: 25
  },
  container2: {
    flex: 1
  },
  spacing: {
    height: 10
  },
  spacingWidth: {
    width: 15
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(0,0,0,1)'
  },
  text1: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0,0,0,1)'
  },
  text2: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'justify'
  },
  text3: {
    fontSize: 15,
    fontWeight: '500',
    color: '#F84464',
    textAlign: 'justify'
  },
  container4: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: 5
  },
  container5: {
    marginHorizontal: 18,
    marginTop: 15
  },
  image: {
    width: '100%'
  }
});
