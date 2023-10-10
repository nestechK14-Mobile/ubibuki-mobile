import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../04InputNumber/styles';

const InputNumber = () => {
  return (
    <View>
      <View style={styles.header}>
        <Image source={require('../../assets/MoviesTimes.png')} />
        <Image source={require('../../assets/SearchIcon.png')} />
      </View>
      <View style={styles.ScrollView}>
        <Image source={require('../../assets/HinhPhimScroll.png')} />
      </View>
    </View>
  );
};

export default InputNumber;
