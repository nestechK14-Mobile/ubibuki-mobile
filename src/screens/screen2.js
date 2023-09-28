import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

const Screen2 = () => {
  const navigation = useNavigation();

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
      <Button title={'Move to Screen 3'} onPress={pressToScreen3} />
    </View>
  );
};

export default Screen2;
