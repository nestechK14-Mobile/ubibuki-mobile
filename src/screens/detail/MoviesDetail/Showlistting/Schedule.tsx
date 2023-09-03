import React, { useRef } from 'react';
import { StyleSheet, View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
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
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import Title from './title';
// import { useNavigation } from '@react-navigation/native';
// import { SCREEN_NAME } from 'constants';

interface DataItem {
  [x: string]: any;
  id: string;
  day1: string;
}

const data: DataItem[] = [
  { id: '1', day1: 'Thu', day2: '1' },
  { id: '2', day1: 'Fri', day2: '2' },
  { id: '3', day1: 'Sat', day2: '3' },
  { id: '4', day1: 'Sun', day2: '4' },
  { id: '5', day1: 'Mon', day2: '5' }
];

const Schedule = () => {
  const renderItem = ({ item }: { item: DataItem }) => (
    <View style={styles.item}>
      <TouchableOpacity>
        <View style={styles.infoContainer}>
          <View style={styles.container1}>
            <View style={styles.container2}>
              <Text style={styles.Text}> {item.day1}</Text>
              <View style={styles.container3}>
                <Text style={styles.Text1}> {item.day2}</Text>
              </View>
            </View>
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
        numColumns={5}
        contentContainerStyle={styles.container}
      />

  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 5,
    marginRight: 32
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5
  },
  container2: {
    flexDirection: 'column'
  },
  container3: {
    padding: 3
  },

  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
    width: 60,
    height: 60,
    marginLeft: 32,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)'
  },
  item: {
    flex: 1,
    padding: 8
  },
  image: {},

  Text: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 16,
    fontWeight: '500'
  },
  Text1: {
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
    fontSize: 20
  },
  buttonSearch: {}
});

export default Schedule;
