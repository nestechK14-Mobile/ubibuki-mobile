import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { IMG_Movie, IMG_PlayVideo, IMG_Star } from '../../../assets';
import { DEVICE, scale } from '../../../utils/scale';
import Header from '../components/header';

const VideoBanner = () => {
  return (
    <ImageBackground source={IMG_Movie} style={styles.container}>
      <View style={styles.containerBanner}>
        <Header />
        <View style={{ alignItems: 'center', justifyContent: 'center', height: DEVICE.HEIGHT / 7 }}>
          <Image source={IMG_PlayVideo} />
        </View>
        <View
          style={{
            backgroundColor: 'black',
            width: scale(65),
            padding: scale(8),
            borderRadius: scale(16),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}>
          <Image source={IMG_Star} />
          <Text style={{ color: 'white', fontSize: scale(14), fontWeight: '600' }}>7.1</Text>
        </View>
        <Text style={{ color: 'white', fontSize: scale(20), fontWeight: 'bold' }}>Maaveeran</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '50%',
            justifyContent: 'space-between'
          }}>
          <Text style={{ color: 'white', fontSize: scale(16), fontWeight: '400' }}>
            U/A 2hrs 32 mins
          </Text>
          <View style={{ width: 5, height: 5, backgroundColor: 'white', borderRadius: 20 }} />
          <Text style={{ color: 'white', fontSize: scale(16), fontWeight: '400' }}>Action</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default VideoBanner;

const styles = StyleSheet.create({
  container: {
    width: DEVICE.WIDTH,
    height: DEVICE.HEIGHT / 3
  },
  containerBanner: {
    backgroundColor: '#00000050',
    height: DEVICE.HEIGHT / 3,
    paddingTop: scale(26),
    paddingHorizontal: scale(24)
  }
});
