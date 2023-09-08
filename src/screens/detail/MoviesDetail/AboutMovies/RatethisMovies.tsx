import React, { useRef } from 'react';
import { StyleSheet, View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Book_Tickets_IMG1, Star_1 } from 'assets';

interface DataItem {
  [x: string]: any;
  id: string;
  source: any;
}

const data: DataItem[] = [
  { id: '1', source: Book_Tickets_IMG1, title1: 'Maaveeran', num: '7.1', view: '25.3K' }
  // { id: '2', source: Book_Tickets_IMG2, title1: 'Vikram', num: '9.8', view: '70.3k' },
  // { id: '3', source: Book_Tickets_IMG3, title1: 'Jonk Wick - 4', num: '10', view: '65.3k' },
  // { id: '4', source: Book_Tickets_IMG4, title1: 'Fast X', num: '8.5', view: '48.8k' }
];

const Rating = () => {
  const renderItem = ({ item }: { item: DataItem }) => (
    <View style={styles.item}>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.2}>
            <Image source={Star_1} />
          </TouchableOpacity>
          <Text style={styles.Text1}> {item.num}</Text>
        </View>
        <View style={styles.spacing} />
        <View style={styles.container2}>
          <Text style={styles.Text1}> {item.view}</Text>
          <Text> votes</Text>
          <View style={styles.spacing2} />
          <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.2}>
            <View style={styles.infoContainer}>
              <Text style={styles.Text3}>Rating</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
    //   padding: 16
  },
  container1: {
    flexDirection: 'row',
    marginHorizontal: 20
  },
  container2: {
    flexDirection: 'row'
  },
  spacing: {
    width: 16
  },
  spacing2: {
    width: 150
  },
  infoContainer: {
    backgroundColor: '#F84464',
    borderRadius: 32,
    width: 91,
    height: 32,
    // marginLeft: 32,
    borderWidth: 1,
    borderColor: '#F84464'
  },

  item: {},
  image: {},

  Text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '400'
  },
  Text1: {
    fontWeight: 'bold',
    color: '#000000'
  },
  Text3: {
    fontWeight: '500',
    color: '#FFFFFF',
    fontSize: 16,
    alignContent: 'center',
    textAlign: 'center',
    marginVertical: 3
  },
  buttonSearch: {}
});

export default Rating;
