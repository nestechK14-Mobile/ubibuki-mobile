import React, { useRef } from 'react';
import { StyleSheet, View, FlatList, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import {
  Book_Tickets,
  Book_Tickets_IMG1,
  Book_Tickets_IMG2,
  Book_Tickets_IMG3,
  Book_Tickets_IMG4,
  Ellipse_1,
  Ellipse_2,
  IC_Search,
  IMG_BannerSample,
  IMG_LogoTitle,
  Star_1
} from 'assets';
import Title from './title';
import Schedule from './Schedule';
import { SafeAreaView } from 'react-native-safe-area-context';
import Parking from './ParkingMain.tsx/Parking';
import { useNavigation } from '@react-navigation/native';

const ShowlistingContent = () => {
  return (
    <SafeAreaView>
      <Schedule />
      <Title source={'A R K Ram Muthu Ram Cinema Rgb Dolby Atoms'}></Title>
      <Parking source={'Parking   4k   More Info'}/>
      <Title source={'PSS Multiplex Cinema Rgb Dolby Atoms'}/>
      <Parking source={'Parking   4k   More Info'}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 32
  }
});

export default ShowlistingContent;
