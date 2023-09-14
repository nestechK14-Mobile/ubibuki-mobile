import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';

interface Data {
    title: String;
}


const Title = ({title}: Data) => {
  return (
    <View style={styles.container}>
        <Text style = {styles.text}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: "#000000"
  }
});
