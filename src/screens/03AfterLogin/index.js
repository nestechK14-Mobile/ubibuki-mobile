import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../03AfterLogin/styles';
import { useNavigation } from '@react-navigation/native';

const AfterLogin = () => {
  const navigation = useNavigation();
  const pressToScreenInput = () => {
    navigation.navigate('InputNumber');
  };
  return (
    <View style={styles.tong}>
      <View style={styles.skipbutton}>
        <TouchableOpacity onPress={pressToScreenInput}>
          <Text>SKIP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.khungvien}>
        <View style={styles.khungvientrong}>
          <View style={styles.hinhmovies}>
            <Image source={require('../../assets/LogoTimeMovie.png')} />
          </View>

          <View style={styles.text}>
            <Text>Choose an accoun</Text>
          </View>

          <View style={styles.text}>
            <Text>to continue to Movie ticket booking</Text>
          </View>

          <View style={styles.hinhtron}>
            <View>
              <Image source={require('../../assets/hinhtron.png')} />
            </View>
            <View>
              <Text>Mj Godwin</Text>
              <Text>abcdefgh1234578@gmail.com</Text>
            </View>
          </View>

          <View style={styles.line}></View>

          <View style={styles.hinhtron}>
            <View>
              <Image source={require('../../assets/hinhtron.png')} />
            </View>
            <View>
              <Text>Mj Godwin</Text>
              <Text>abcdefgh1234578@gmail.com</Text>
            </View>
          </View>

          <View style={styles.line}></View>

          <View style={styles.hinhtron}>
            <View>
              <Image source={require('../../assets/hinhtron.png')} />
            </View>
            <View>
              <Text>Mj Godwin</Text>
              <Text>abcdefgh1234578@gmail.com</Text>
            </View>
          </View>

          <View style={styles.line}></View>

          <View style={styles.bottomtext}>
            <Image source={require('../../assets/VectorNguoi.png')} />
            <View style={styles.addText}>
              <Text>Add another account</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AfterLogin;
