import React, { useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from '../04InputNumber/styles';

const ImageList = () => {
  const [images, setImages] = useState([
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

  return (
    <View>
      <View style={styles.header}>
        <Image source={require('../../assets/LogoTimeMovie.png')} />
        <Image source={require('../../assets/SearchIcon.png')} />
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
export default ImageList;
