import React from 'react';
import { StyleSheet, View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import {
  Book_Tickets,
  Book_Tickets_IMG1,
  Book_Tickets_IMG2,
  Book_Tickets_IMG3,
  Book_Tickets_IMG4,
  Cast1,
  Cast2,
  Cast3,
  Ellipse_1,
  Ellipse_2,
  IC_Search,
  IMG_BannerSample,
  IMG_LogoTitle,
  Star_1
} from 'assets';

interface DataItem {
  [x: string]: any;
  id: string;
  source: any;
}

const data: DataItem[] = [
  { id: '1', source: Cast1, title1: 'Sivakarthikayen' },
  { id: '2', source: Cast2, title1: 'Aditi Shankar' },
  { id: '3', source: Cast3, title1: 'Aditi Shankar' }
];

const CastingList = () => {
  const renderItem = ({ item }: { item: DataItem }) => (
    <View style={styles.item}>
      <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.2}>
        <Image source={item.source} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.Text}> {item.title1}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={3}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container2: {
    flexDirection: 'row'
  },

  item: {
    flex: 1,
    padding: 8
  },
  image: {},

  Text: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    alignContent: 'center'
  },
  Text1: {
    fontWeight: 'bold'
  },
  buttonSearch: {}
});

export default CastingList;
