import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import React from 'react';

const WIDTH_SCREEN = Dimensions.get('screen').width;

const PhoneNumber = () => {
  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.textDefault}>
        Mobile Number
      </Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholder={'+84...'}
          placeholderTextColor={'black'}
          keyboardType={'phone-pad'}
        />
      </View>
    </View>
  );
};

export default PhoneNumber;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: WIDTH_SCREEN * 0.9
  },
  textDefault: {
    color: 'black'
  },
  containerInput: {
    backgroundColor: '#00000012',
    width: '100%',
    marginTop: 12,
    borderRadius: 10,
    paddingHorizontal: 24
  }
});
