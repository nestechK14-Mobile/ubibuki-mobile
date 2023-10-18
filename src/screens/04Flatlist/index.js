import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const FlatList1 = () => {
  const [images] = useState([
    { id: '1', src: require('../../assets/HinhPhimScroll.png') },
    { id: '2', src: require('../../assets/HinhPhimScroll.png') },
    { id: '3', src: require('../../assets/HinhPhimScroll.png') }
  ]);
  const renderItem = ({ item }) => {
    return (
      <View style={{ margin: 10 }}>
        <Image source={item.src} style={{ width: 380, height: 200 }} />
      </View>
    );
  };
  const navigation = useNavigation();
  const pressMove = () => {
    navigation.navigate('OTPNumber');
  };
  return (
    <View>
      <View style={styles.header}>
        <Image source={require('../../assets/LogoTimeMovie.png')} />
        <TouchableOpacity onPress={pressMove}>
          <Text>SKIP</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
    </View>
  );
};
export default FlatList1;
