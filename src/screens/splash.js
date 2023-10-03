import React from 'react';
import { Text, View } from 'react-native';

function Splash() {
  function hamA() {
    let mangA = ['1', '2', ''];

    let objectA = {
      id: 1,
      name: '2',
      string: 3.3
    };

    console.log('mangA', mangA?.[1]);
    console.log('mangA', objectA?.name);
  }

  return (
    <View>
      <Text>This is a new screen!</Text>
    </View>
  );
}

export default Splash;
