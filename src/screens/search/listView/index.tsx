import React, { useRef } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';

interface DataItem {
  id: string;
  name: String;
}

const data: DataItem[] = [
  {
    id: '1',
    name: 'Bengaluru'
  },
  {
    id: '1',
    name: 'Bengaluru'
  },
  {
    id: '1',
    name: 'Bengaluru'
  },
  {
    id: '1',
    name: 'Bengaluru'
  },
  {
    id: '1',
    name: 'Bengaluru'
  },
  {
    id: '1',
    name: 'Bengaluru'
  },
  {
    id: '1',
    name: 'Bengaluru'
  },
  {
    id: '1',
    name: 'Bengaluru'
  },
  {
    id: '1',
    name: 'Bengaluru'
  },
  {
    id: '1',
    name: 'Bengaluru'
  },
  {
    id: '1',
    name: 'Bengaluru'
  },
  {
    id: '1',
    name: 'Bengaluru'
  }
];

const ListView = () => {
  const renderItem = ({ item }: { item: DataItem }) => (
    <View style={styles.container1}>
      <View style={styles.item}>
        <TouchableOpacity>
          <View style={styles.infoContainer}>
            <View style={styles.container1}>
              <View style={styles.container2}>
                <Text style={styles.Text}> {item.name}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  container1: {
    paddingHorizontal: 3
  },
  container2: {},
  container3: {},
  container4: {
    marginTop: 25
  },

  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    width: 110,
    height: 40,
    borderWidth: 1,
    borderColor: '#F84464',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    marginVertical: 5,
    marginHorizontal: 10
  },
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

export default ListView;
