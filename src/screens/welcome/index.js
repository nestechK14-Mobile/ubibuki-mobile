import { View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import styles from './styles';
import Banner from './sections/banner';

const WelcomeScreen =() => {
  return (
    (<SafeAreaView style={styles.container}> 
      <Header />
      <View style={{ height: 8, backgroundColor: 'blue', marginVertical: 10 }} />
      <Banner />
    </SafeAreaView>)
      );
};

export default WelcomeScreen;
