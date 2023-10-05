import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Header from '../../components/header';
import Banner from './sections/banner';
import styles from './styles';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={{ height: 4, backgroundColor: 'blue', marginVertical: 4 }} />
      <Banner />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
