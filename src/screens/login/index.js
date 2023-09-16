import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const AfterLogin = () => {
  const navigation = useNavigation();
  const pressBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.viewTong}>
      <View>
        <TouchableOpacity onPress={pressBack}>
          <Text style={styles.buttonBack}>BACK</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.MVT}>
        <Image source={require('../../assets/MoviesTimes.png')} />
        <Image source={require('../../assets/VectorMVT.png')} />
      </View>

      <View style={styles.viewText}>
        <Text style={styles.textChoose}>Choose an account</Text>
        <Text>to continue to Movie ticket booking</Text>
      </View>

      <View>
        <TouchableOpacity>
          <View style={styles.hinhtron}>
            <Image source={require('../../assets/hinhtron.png')} />
            <View style={styles.text}>
              <Text style={styles.textStyle}>Mj Godwin</Text>
              <Text>abcdefgh1234578@gmail.com</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.Line}></View>

      <View>
        <TouchableOpacity>
          <View style={styles.hinhtron}>
            <Image source={require('../../assets/hinhtron.png')} />
            <View style={styles.text}>
              <Text style={styles.textStyle}>Mj Godwin</Text>
              <Text>abcdefgh1234578@gmail.com</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.Line}></View>

      <View>
        <TouchableOpacity>
          <View style={styles.hinhtron}>
            <Image source={require('../../assets/hinhtron.png')} />
            <View style={styles.text}>
              <Text style={styles.textStyle}>Mj Godwin</Text>
              <Text>abcdefgh1234578@gmail.com</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.Line}></View>

      <Text>
        <TouchableOpacity>
          <View style={styles.addOther}>
            <Image source={require('../../assets/VectorNguoi.png')} />
            <Text style={styles.addOtherText}>Add another account</Text>
          </View>
        </TouchableOpacity>
      </Text>

      <Text style={styles.styleTextBottom}>
        To contine,Google will Share your name, email address and profile picture with Movies Time.
        Before using this app, review its Privacy Policy and Terms of Service
      </Text>
    </View>
  );
};

export default AfterLogin;
