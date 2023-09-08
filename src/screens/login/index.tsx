import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Line, bottomtitle, google, logo } from 'assets';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../constants/screenNames';

const LogInScreen = () => {
  const navigation = useNavigation();
  

  const navigateToHome = () => {
    navigation.navigate(SCREEN_NAME.WELCOME_SCREEN);
  };
  const navigateToNumberLogin = () => {
    navigation.navigate(SCREEN_NAME.NUMBER_LOGIN);
  };
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={navigateToHome}  >
          <Text style={styles.text}>SKIP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <Image source={logo} />
      </View>
      <View style={styles.spacing}></View>
      <View style={styles.container4}>
        <View>
          <TouchableOpacity>
            <View style={styles.inforContainer}>
              <View style={styles.container3}>
                <Image source={google} />
                <View style={styles.spacing1}></View>
                <Text style={styles.text1}>Log With Google</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.spacing}></View>
        <View>
          <TouchableOpacity>
            <View style={styles.inforContainer}>
              <View style={styles.container3}>
                <Text style={styles.text1}>Log With Email</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.spacing}></View>
        <View style={styles.container3}>
          <Image source={Line} />
          <View style={styles.spacing1}></View>
          <Text>or</Text>
          <View style={styles.spacing1}></View>
          <Image source={Line} />
        </View>
      </View>
      <View style={styles.spacing}></View>
      <View style={styles.container6}>
        <Text style={styles.text1}>Mobile Number</Text>
      </View>
      <View style={styles.spacing}></View>
      <View style={styles.container4}>
        <TouchableOpacity onPress={navigateToNumberLogin}>
          <View style={styles.inforContainer1}>
            <View style={styles.container5}>
              <TextInput
                onChangeText={onChangeNumber}
                value={number}
                placeholder="+91"
                keyboardType="numeric"></TextInput>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container7}>
        <Image source={bottomtitle} />
      </View>
    </SafeAreaView>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container1: {
    marginRight: 32,
    marginTop: 16
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'right'
  },
  text1: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000000'
  },
  container2: {
    marginTop: 32,
    alignItems: 'center'
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  container4: {
    alignItems: 'center'
  },
  buttonSearch: {
    height: 56,
    width: 60,
  },
  container7: {
    alignItems: 'center',
    marginTop: 100
  },
  container5: {
    marginLeft: 25 // Center horizontally
  },
  container6: {
    marginLeft: 55 // Center horizontally
  },
  spacing: {
    height: 30
  },
  spacing1: {
    width: 16
  },
  inforContainer: {
    backgroundColor: '#00000012',
    height: 56,
    width: 300,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inforContainer1: {
    backgroundColor: '#00000012',
    height: 56,
    width: 300,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});
