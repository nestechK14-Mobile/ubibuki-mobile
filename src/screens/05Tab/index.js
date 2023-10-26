import React from 'react';
import { View } from 'react-native';
import TabTab from '../05Tab/Tab/index';
import Creen from '../05Tab/creen/index';
import styles from '../05Tab/style';

const Test = () => {
  return (
    <View style={styles.container}>
      <Creen />
      <TabTab />
    </View>
  );
};

export default Test;
