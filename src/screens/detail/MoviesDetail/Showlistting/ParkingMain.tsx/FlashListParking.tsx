import React, { useRef } from 'react';
import { StyleSheet, View, FlatList, Image, Text, TouchableOpacity, ScrollView } from 'react-native';


interface DataItem {
  [x: string]: any;
  id: string;
  day1: string;
  day2: string;
}

const data: DataItem[] = [
  { id: '1', day1: '11.30 AM', day2: '2D' },
  { id: '2', day1: '02.30 PM', day2: '2D' },
  { id: '3', day1: '06.30 PM', day2: '2D' },
  { id: '4', day1: '09.30 PM', day2: '2D' },
  { id: '5', day1: '12.30 AM', day2: '2D' }
];

const Flashlist = () => {
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
      <Text style = {styles.Text1}>Atoms</Text>
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
    flex: 1,
    flexDirection: 'row', // Display items in rows
    flexWrap: 'wrap',     // Allow items to wrap to the next row
    justifyContent: 'space-between', // Evenly space items in each row
  },
  container1: {
    
  },
  container2: {
  },
  container3: {
    // padding: 3
  },

  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 15,
    width: 115, 
    height: 60,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    padding: 8,
    display: 'flex',        // Add this to enable Flexbox
    justifyContent: 'center', // Vertically center its children
    alignItems: 'center',     // Horizontally cent
    marginHorizontal: 5
  },
  item: {
    marginVertical: 10,
    marginHorizontal: 5
  },
  image: {},

  Text: {
    color: '#1EC239',
    fontSize: 16,
    fontWeight: '700',
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

export default Flashlist;
