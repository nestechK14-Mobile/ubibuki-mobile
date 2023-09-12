import React, { useRef } from 'react';
import { StyleSheet, View, FlatList, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../Showlistting/title';
import Detaillist from './detailList';
import Rating from './ratethisMovies';
import Content from './content';
import CastingList from './castingList';


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
