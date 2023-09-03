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

import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../Showlistting/title';
import Detaillist from './DetailList';
import Rating from './RatethisMovies';
import Content from './Content';
import CastingList from './CastingList';


const AboutMovies = () => {
  return (
    <SafeAreaView>
      <Title source={'Details'}></Title>
      <Detaillist/>
      <Title source={'Rate this Movie'}/>
      <Rating/>
      <Title source={'Synopsis'}/>
      <Content source={'After a head injury, timid newspaper cartoonist Sathya hears a voice narrating his life as an epic tale of heroism and urging him to take on Jeyakodi, a corrupt politician.'}/>
      <Title source={'Cast'}/>
      <CastingList/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 32
  }
});

export default AboutMovies;
