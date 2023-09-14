import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { IC_Search_Red } from 'assets';

const TextFieldSearch = () => {
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <View  style={styles.container3}>
            <Image source={IC_Search_Red}></Image>
          </View>
          <View style = {styles.spacing}></View>
          <TextInput
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Search"
            keyboardType="default"></TextInput>
        </View>
      </View>
    </View>
  );
};

export default TextFieldSearch;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 25
  },
  buttonSearch: {},
  container1: {
    height: 48,
    width: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 1
  },
  container2: {
    marginLeft: 25,
    flexDirection: 'row'
  },
  container3: {
    marginTop: 13
  },
  spacing: {
    width: 10
  }
});
