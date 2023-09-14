import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { IMG_LogoTitle } from '../../assets/images';
import { IC_Search } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../constants';

const Header = () => {
  const navigation = useNavigation();
  const navigateToSearchScreen = () => {
    navigation.navigate(SCREEN_NAME.SEARCH_SCREEN);
  };
  return (
    <View style={styles.container}>
      <Image source={IMG_LogoTitle} />
      <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.2} onPress={navigateToSearchScreen}>
        <Image source={IC_Search} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16
  },
  buttonSearch: {}
});
