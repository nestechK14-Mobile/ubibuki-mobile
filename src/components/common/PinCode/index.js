import { View, StyleSheet } from 'react-native';
import React from 'react';
import PinMask from './PinMask';

const PinCode = props => {
  const { style, codeLength = 6, errorCode, value, onChangeText } = props;

  const onChangeCodeHandle = text => {
    onChangeText(prev => prev + text);
  };

  const onDelete = () => {
    onChangeText(prev => prev?.slice(0, -1));
  };

  return (
    <>
      <View style={[styles.container, style]}>
        {Array.apply(null, Array(codeLength)).map((_, idx) => (
          <PinMask
            isError={errorCode}
            currentCode={value}
            idx={idx}
            key={idx}
            onChangeCodeHandle={onChangeCodeHandle}
            onDelete={onDelete}
            {...{ codeLength }}
          />
        ))}
      </View>
    </>
  );
};

export default PinCode;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
