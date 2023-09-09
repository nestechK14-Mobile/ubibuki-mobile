import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import MView from '../MView';
import { TYPE_VIEW } from '@constants/common';
import { STATUS_BAR_HEIGHT } from '@utils/scale';

const MText = props => {
  const { children, style, numberOfLines = 1, ...restChildren } = props;
  return (
    <Text
      style={[styles.textDefault, style]}
      maxFontSizeMultiplier={1}
      allowFontScaling={false}
      adjustsFontSizeToFit
      numberOfLines={numberOfLines}
      {...restChildren}>
      {children}
    </Text>
  );
};

export default MText;
