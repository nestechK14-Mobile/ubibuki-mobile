import { TextInput } from 'react-native';
import React from 'react';
import styles from './styles';
import MView from '../MView';
import MText from '../MText';
import { EMPTY_STRING } from '@constants/common';

const MTextInput = props => {
  const {
    options = {
      titleInput: '',
      styleTitleInput: {},
      placeholder: '',
      styleInput: {},
      errorInput: '',
      errorInputStyle: {}
    },
    value,
    ...rest
  } = props;
  return (
    <MView style={styles.container}>
      <MText style={[styles.titleInputDefault, options?.styleTitleInput || {}]}>
        {options?.titleInput ? options?.titleInput : EMPTY_TITLE}
      </MText>
      <MView style={styles.containerTextInput}>
        <TextInput
          placeholder={options?.placeholder}
          style={[styles.inputDefault, options?.styleInput]}
          value={value}
          {...rest}
        />
      </MView>
      {value && (
        <MText style={[options?.errorInputStyle || {}, styles.errorDefault]}>
          {options?.errorInput ? options?.errorInput : EMPTY_STRING}
        </MText>
      )}
    </MView>
  );
};

export default MTextInput;
