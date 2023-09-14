import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { IMG_LogoTitle } from '../../../assets/images';
import { Location } from '../../../assets';
import { useNavigation } from '@react-navigation/native';

const HeaderSearch = () => {
  const navigation = useNavigation();
  const navigateToSearchScreen = () => {
  };
  return (
    <View style={styles.container}>
      <Image source={IMG_LogoTitle} />
      <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.2} onPress={navigateToSearchScreen}>
        <Image source={Location} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16
  },
  buttonSearch: {}
});
