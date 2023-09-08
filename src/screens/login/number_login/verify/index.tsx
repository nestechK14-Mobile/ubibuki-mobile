import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { Back, BackDark, Play, Star_1 } from 'assets';
import { useNavigation } from '@react-navigation/native';

const VerifyNumber = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerBack}>
        <TouchableOpacity onPress={goBack} style={styles.buttonSearch} activeOpacity={0.2}>
          <Image source={BackDark} />
        </TouchableOpacity>
        <View style={styles.container1}>
          <Text style={styles.text1}> Verify your Mobile Number </Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text2}> Enter the OTP sent to 900337002</Text>
        </View>
        <View style={styles.containerlist}>
          <View style={styles.container3}>
            <View style={styles.container4}></View>
          </View>

          <View style = {styles.spacing}></View>

          <View style={styles.container3}>
            <View style={styles.container4}></View>
          </View>

          <View style = {styles.spacing}></View>

          <View style={styles.container3}>
            <View style={styles.container4}></View>
          </View>

          <View style = {styles.spacing}></View>

          <View style={styles.container3}>
            <View style={styles.container4}></View>
          </View>

          <View style = {styles.spacing}></View>
          
          <View style={styles.container3}>
            <View style={styles.container4}></View>
          </View>
        </View>
        <View style={styles.container5}>
          <Text style={styles.text3}>VERIFY</Text>
        </View>
      </View>
    </View>
  );
};

export default VerifyNumber;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  container1: {
    marginTop: 100
  },
  container2: {
    marginTop: 5
  },
  spacing: {
    width: 22
  },
  container3: {
    marginTop: 80,
    height: 50,
    width: 50,
    backgroundColor: 'rgba(0,0,0,0.07)',
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  containerlist: {
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  container4: {
    marginLeft: 25
  },
  container5: {
    marginTop: 25,
    height: 56,
    width: 340,
    backgroundColor: 'rgba(248, 68, 100, 1)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container6: {
    height: 56,
    width: 60,
    backgroundColor: '#000000'
  },
  containerBack: {
    marginTop: 20,
    marginLeft: 26
  },
  text1: {
    fontSize: 22,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)'
  },
  text2: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.5)'
  },
  text3: {
    fontSize: 17,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)'
  },

  buttonSearch: {
    height: 56,
    width: 60
  }
});
