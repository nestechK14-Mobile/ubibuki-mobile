import React, { Text, StyleSheet } from 'react-native';
import { View } from 'react-native';
import HeaderSearch from './header';
import TextFieldSearch from './textFieldSearch';
import Title from './title';
import ListView from './listView';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <HeaderSearch />
        <TextFieldSearch />
        <View style={styles.spacing}></View>
        <Title title={'Top Cities'} />
        <View style={styles.spacing}></View>
        <ListView />
        <View style={styles.spacing}></View>
        <Title title={'Top Cities'} />
    </SafeAreaView>
  );
};
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
  },
  spacing: {
    height: 25
  },
});
