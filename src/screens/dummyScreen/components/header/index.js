import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { IC_Back } from '../../../../assets';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={IC_Back} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export default Header;
