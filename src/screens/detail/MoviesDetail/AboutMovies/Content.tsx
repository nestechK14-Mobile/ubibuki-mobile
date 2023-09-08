import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import React from 'react';

interface TitleProps {
  source: String;
}

const Content = ({ source }: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{source}</Text>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000B2',
    textAlign: 'justify'
  }
});
