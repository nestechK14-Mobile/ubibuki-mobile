import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import styles from './styles';
import Banner from './sections/banner';

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
