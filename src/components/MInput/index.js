import React from 'react';
import { TextInput } from 'react-native';
import MText from '../MText';
import MView from '../MView';
import styles from './styles';

const MInput = props => {
  const { containerInput = {}, title, titleStyle = {}, inputStyle = {}, ...rest } = props;
  return (
    <MView style={[styles.container, containerInput]}>
      <MText style={titleStyle} {...rest}>
        {title}
      </MText>
      <MView style={inputStyle}>
        <TextInput allowFontScaling={false} autoComplete="off" {...rest} />
      </MView>
    </MView>
  );
};

export default MInput;
