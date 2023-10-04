import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Button, Text, TouchableOpacity, View } from 'react-native';
import { FONTS } from '../constants/common';

const Screen2 = () => {
  const navigation = useNavigation();
  const route = useRoute();

  console.log('route', route.params?.phoneNumber);

  const pressToScreen1 = () => {
    navigation.goBack();
  };

  const pressToScreen3 = () => {
    navigation.navigate('TabRouter');
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Button title={'Move to Screen 1'} onPress={pressToScreen1} />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={pressToScreen3}
        style={{ marginTop: 16, backgroundColor: 'red', padding: 16, borderRadius: 20 }}>
        <Text style={{ fontFamily: FONTS.BOLD, color: 'white' }}>Move to Screen 3</Text>
      </TouchableOpacity>

      {!route?.params?.phoneNumber ? (
        <ActivityIndicator />
      ) : (
        <Text style={{ fontFamily: FONTS.REGULAR }}> {route.params?.phoneNumber ?? ''} </Text>
      )}
    </View>
  );
};

export default Screen2;
