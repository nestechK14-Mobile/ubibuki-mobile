import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';

const Login = () => {
  const navigation = useNavigation();
  const pressToScreen2 = () => {
    navigation.navigate('AfterLogin');
  };
  const [text, setText] = useState('');

  const handleTextChange = newText => {
    setText(newText);
  };

  return (
    <View style={styles.tong}>
      <View style={styles.nut}>
        <TouchableOpacity onPress={pressToScreen2}>
          <Text>SKIP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.styleAppLogo}>
        <Image source={require('../../assets/appLogo.png')} />
      </View>

      <View style={styles.ViewGGLogin}>
        <TouchableOpacity style={styles.GGLogin}>
          <Image source={require('../../assets/hinhGG.png')} />
          <Text>Log With Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ViewGGLogin}>
        <TouchableOpacity style={styles.GGLogin}>
          <Image source={require('../../assets/hinhGG.png')} />
          <Text>Log With Email</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line}>
        <View style={styles.line1}></View>
        <Text>or</Text>
        <View style={styles.line1}></View>
      </View>

      <View style={styles.MobileNumber}>
        <Text>Mobile Number</Text>
      </View>

      <View style={styles.ViewGGLogin}>
        <TextInput
          style={styles.textInput}
          onChangeText={handleTextChange}
          value={text}
          placeholder="Nhập văn bản..."
        />
      </View>
    </View>
  );
};

export default Login;
