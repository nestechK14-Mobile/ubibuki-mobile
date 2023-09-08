import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import {IMG_BannerSample, Upcoming_Movies_IMG } from '../../../assets'; // Update the import paths

const Slider = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        autoplay>
        <View style={styles.slide}>
          <Image source={IMG_BannerSample} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={Upcoming_Movies_IMG} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={IMG_BannerSample} style={styles.image} />
        </View>
      </Swiper>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginBottom: -15
  },
  wrapper: {
    height: 220
  },
  slide: {
    alignItems: 'center',
  },
  image: {
  },
  dot: {
    backgroundColor: '#0000001A',
    width: 10,
    height: 10,
    borderRadius: 5
  },
  activeDot: {
    backgroundColor: '#F84464', // Màu đỏ cho điểm khi chuyển slide
    width: 10,
    height: 10,
    borderRadius: 5
  }
});
