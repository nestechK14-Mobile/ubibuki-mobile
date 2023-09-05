import React from 'react';
import { StyleSheet, View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import {
  Book_Tickets,
  Book_Tickets_IMG1,
  Book_Tickets_IMG2,
  Book_Tickets_IMG3,
  Book_Tickets_IMG4,
  Star_1
} from 'assets';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../../constants/screenNames';

interface DataItem {
  [x: string]: any;
  id: string;
  source: any;
  title1: string;
  num: string;
  view: string;
}

const data: DataItem[] = [
  { id: '1', source: Book_Tickets_IMG1, title1: 'Maaveeran', num: '7.1', view: '25.3k' },
  { id: '2', source: Book_Tickets_IMG2, title1: 'Vikram', num: '9.8', view: '70.3k' },
  { id: '3', source: Book_Tickets_IMG3, title1: 'Jonk Wick - 4', num: '10', view: '65.3k' },
  { id: '4', source: Book_Tickets_IMG4, title1: 'Fast X', num: '8.5', view: '48.8k' }
];

const GridList = () => {
  const navigation = useNavigation();
  const navigateToDetail = () => {
    navigation.navigate(SCREEN_NAME.DETAIL_SCREEN);
  };
  const renderItem = ({ item }: { item: DataItem }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={navigateToDetail} style={styles.buttonSearch} activeOpacity={0.2}>
        <Image source={item.source} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <View style={styles.container1}>
          <View style={styles.container2}>
            <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.2}>
              <Image source={Star_1} />
            </TouchableOpacity>
            <Text style={styles.Text1}> {item.num}</Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.Text1}> {item.view}</Text>
            <Text> votes</Text>
          </View>
        </View>
      </View>
      <Text style={styles.Text}> {item.title1}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8
  },
  container2: {
    flexDirection: 'row'
  },

  infoContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.07)', // Màu nền xám
    borderRadius: 15,
    padding: 2,
    marginVertical: 7
  },
  item: {
    flex: 1,
    padding: 8
  },
  image: {},

  Text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '400'
  },
  Text1: {
    fontWeight: 'bold'
  },
  buttonSearch: {}
});

export default GridList;
