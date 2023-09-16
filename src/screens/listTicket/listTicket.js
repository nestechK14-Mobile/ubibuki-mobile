import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListTicket = () => {
  const navigation = useNavigation();

  const pressBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text>List Ticket</Text>
      <TouchableOpacity
        onPress={pressBack}
        style={{ width: 100, height: 100, backgroundColor: 'blue' }}>
        <Text>Lùi về</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListTicket;
