import React, { useLayoutEffect, useRef } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import MView from '../MView';
import { scale } from '@/utils';
import { COLORS } from '@/constants';

const PinMask = props => {
  const { currentCode, idx, onChangeCodeHandle, codeLength, onDelete, isError } = props;
  const cellRef = useRef(null);

  useLayoutEffect(() => {
    if (currentCode?.length === idx && cellRef) {
      cellRef.current.focus();
    }
  }, [codeLength, currentCode?.length, idx]);

  const onChangeText = text => {
    onChangeCodeHandle(text);
  };

  return (
    <MView
      style={[
        styles.pinMaskContainer,
        currentCode?.length > idx && styles.filledCell,
        isError && styles.errorMask
      ]}>
      <TextInput
        ref={cellRef}
        style={styles.maskInput}
        maxLength={1}
        onChangeText={onChangeText}
        onKeyPress={({ nativeEvent }) => {
          if (nativeEvent.key === 'Backspace') {
            if (typeof onDelete === 'function') {
              onDelete();
            }
          }
        }}
        keyboardType={'number-pad'}
        value={currentCode[idx]}
        editable={currentCode?.length >= idx}
      />
    </MView>
  );
};

export default PinMask;

const styles = StyleSheet.create({
  pinMaskContainer: {
    width: scale(48),
    height: scale(48),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: scale(12),
    borderWidth: scale(1),
    borderColor: COLORS.RED_500
  }
});
