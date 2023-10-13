import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from '../04InputNumber/styles';

const data = [
  { id: '1', source: require('../../assets/HinhPhimScroll.png') },
  { id: '2', source: require('../../assets/HinhPhimScroll.png') },
  { id: '3', source: require('../../assets/HinhPhimScroll.png') }
];

const InputNumber = () => {
  return (
    <View>
      <View style={styles.header}>
        <Image source={require('../../assets/MoviesTimes.png')} />
        <Image source={require('../../assets/SearchIcon.png')} />
      </View>
      <FlatList>
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Image source={item.source} style={styles.image} />}
      </FlatList>
    </View>
  );
};

export default InputNumber;
