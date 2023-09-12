import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import React from 'react';
import { Back, BackDark, Play, Star_1 } from 'assets';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../../constants/screenNames';

const InformationMovies = () => {
  const navigation = useNavigation();
  const navigatetoVerify = () => {
    navigation.navigate(SCREEN_NAME.VERYFY_NUMBER);
  };
  const goBack = () => {
    navigation.goBack();
  };
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView keyboardVerticalOffset={16}>
        <View style={styles.containerBack}>
          <TouchableOpacity onPress={goBack} style={styles.buttonSearch} activeOpacity={0.2}>
            <Image source={BackDark} />
          </TouchableOpacity>
          <View style={styles.container1}>
            <Text style={styles.text1}> Login With Mobile Number</Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.text2}> Mobile Number</Text>
          </View>
          <View style={styles.container3}>
            <View style={styles.container4}>
              <TextInput
                onChangeText={onChangeNumber}
                value={number}
                placeholder="+91"
                keyboardType="numeric"></TextInput>
            </View>
          </View>
          <TouchableOpacity onPress={navigatetoVerify}>
            <View style={styles.container5}>
              <Text style={styles.text3}>VERIFY</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default InformationMovies;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  container1: {
    marginTop: 100
  },
  container2: {
    marginTop: 40
  },
  container3: {
    marginTop: 16,
    height: 56,
    width: 340,
    backgroundColor: 'rgba(0,0,0,0.07)',
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center'
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
