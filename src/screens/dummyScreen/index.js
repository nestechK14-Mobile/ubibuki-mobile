import React from 'react';
import { View } from 'react-native';
import Tabs from './sections/Tabs';
import VideoBanner from './sections/VideoBanner';
import styles from './styles';

const DummyScreen = () => {
  return (
    <View style={styles.container}>
      <VideoBanner />
      <Tabs />
    </View>
  );
};

export default DummyScreen;
