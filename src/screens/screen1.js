import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

const Screen1 = () => {
  const navigation = useNavigation();

  const pressToScreen2 = () => {
    navigation.navigate('Screen2', { phoneNumber: '3333' });
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Button title={'Move to Screen 2'} onPress={pressToScreen2} />
    </View>
  );
};

export default Screen1;
