import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { Book_Tickets, IMG_BannerSample } from 'assets';

interface TitleProps {
  source: String;
}

const Title = ({ source }: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>{source}</Text>
    </View>
    
  );
};


export default Title;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    marginHorizontal: 25
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000'
  }

});
