import { View, Text, Image, SafeAreaView, Button, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import styles from './styles';
import Banner from './sections/Banner';
import { useNavigation } from '@react-navigation/native';
import Banner1 from './sections/Headtitle';
import GridList from './sections/ListItems';
import { Book_Tickets, IMG_BannerSample, Upcoming_Movies, Upcoming_Movies_IMG } from 'assets';
import { BottomTabBar } from 'components';
import Slider from './sections/Slide';
import Slider1 from './sections/Slide1';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Slider />
        <Banner1 source={Book_Tickets} />
        <GridList />
        <Banner1 source={Upcoming_Movies} />
        <Slider />
      </ScrollView>
      <BottomTabBar />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
