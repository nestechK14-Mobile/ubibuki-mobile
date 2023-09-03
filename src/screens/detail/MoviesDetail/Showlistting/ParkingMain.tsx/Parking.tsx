import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { Book_Tickets, IMG_BannerSample, InforAlarm } from 'assets';
import Flashlist from './FlashListParking';

interface TitleProps {
  source: String;
}

const Parking = ({ source }: TitleProps) => {
  return (
    <><View style={styles.container}>
      <Image source={InforAlarm} />
      <View style={styles.spacing} />
      <Text style={styles.text}>{source}</Text>
    </View><View>
        <Flashlist />
      </View></>
    
  );
};


export default Parking;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 30

  },
  spacing: {
width: 12
  },

  text: {
    fontSize: 15,
    fontWeight: '400',
    color: '#00000080'
  }

});
