import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {
  Book_Tickets,
  Book_Tickets_IMG1,
  Book_Tickets_IMG2,
  Book_Tickets_IMG3,
  Book_Tickets_IMG4,
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
  name: string;
}

const data: DataItem[] = [
  { id: '1', name: 'Tamil' },
  { id: '2', name: 'Action' }
];

const Detaillist = () => {
  const renderItem = ({ item }: { item: DataItem }) => (
    <View style={styles.item}>
      <TouchableOpacity>
        <View style={styles.container1}>
          <View style={styles.container2}>
            <Text style={styles.Text}> {item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
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
    flex: 1,
    flexDirection: 'row', // Display items in rows
    flexWrap: 'wrap',
    marginHorizontal: 50 // Allow items to wrap to the next row
    // justifyContent: 'space-between', // Evenly space items in each row
  },
  container1: {
    marginHorizontal: 20
  },
  container2: {},

  item: {},
  image: {},

  Text: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center'
  },
  Text1: {
    color: '#00000080',
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center'
  },
  buttonSearch: {}
});

export default Detaillist;
