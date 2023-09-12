import React, { useState, useRef } from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';
import { IMG_BannerSample, Upcoming_Movies_IMG } from '../../../assets';

const Slider1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView | null>(null);
  const windowWidth = Dimensions.get('window').width;
  const images = [IMG_BannerSample, Upcoming_Movies_IMG, IMG_BannerSample];

  const handleScroll = (event: any) => {
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / 300);
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * windowWidth,
        animated: true
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={300}>
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === activeIndex ? '#F84464' : '#0000001A' }
            ]}
            onTouchEnd={() => scrollToIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default Slider1;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginBottom: -15
  },
  slide: {
    width: Dimensions.get('window').width,
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 220,
    resizeMode: 'cover'
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5
  }
});
