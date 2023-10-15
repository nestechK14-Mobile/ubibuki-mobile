import React from 'react';
import { TextInput } from 'react-native';
import MText from '../MText';
import MView from '../MView';
import styles from './styles';

const MInput = props => {
  const {
    containerInput = {},
    title,
    titleStyle = {},
    inputStyle = {},
    errorText = '',
    errorTitleStyle = '',
    ...rest
  } = props;
  return (
    <MView style={[styles.container, containerInput]}>
      <MText style={titleStyle} {...rest}>
        {title}
      </MText>
      <MView style={inputStyle}>
        <TextInput autoComplete="off" {...rest} />
      </MView>
      <MText style={[styles.errorText, errorTitleStyle]} {...rest}>
        {errorText}
      </MText>
    </MView>
  );
};

export default MInput;
