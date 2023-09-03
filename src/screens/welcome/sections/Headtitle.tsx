import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { Book_Tickets, IMG_BannerSample, IMG_LogoTitle } from 'assets';

interface SourceProps {
  source: ImageSourcePropType;
}

const Banner1 = ({source}: SourceProps) => {
  return (
    <View style={styles.container}>
      <Image source={source} />
    </View>
  );
};

export default Banner1;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  Text: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '400',

  },
});
