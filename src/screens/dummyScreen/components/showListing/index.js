import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ShowListing = () => {
  const dataTimes = [
    { id: 1, day: 1, date: 'Mon' },
    { id: 2, day: 2, date: 'Tue' },
    { id: 3, day: 3, date: 'Wed' }
  ];
  const [dateCurrent, setDateCurrent] = useState(dataTimes[0]);

  const changeDateCurrent = time => {
    setDateCurrent(time);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50%',
        paddingVertical: 16
      }}>
      {dataTimes.map(item => {
        return (
          <TouchableOpacity
            style={{
              borderWidth: 1,
              padding: 12,
              borderRadius: 12,
              borderColor: dateCurrent.id === item.id ? 'transparent' : 'black',
              alignItems: 'center',
              backgroundColor: dateCurrent.id === item.id ? 'pink' : 'white'
            }}
            onPress={() => changeDateCurrent(item)}>
            <Text style={{ color: dateCurrent.id === item.id ? 'white' : 'black' }}>
              {item.date}
            </Text>
            <Text style={{ color: dateCurrent.id === item.id ? 'white' : 'black' }}>
              {item.day}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ShowListing;

const styles = StyleSheet.create({});
