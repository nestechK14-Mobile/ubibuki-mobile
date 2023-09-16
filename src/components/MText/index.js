import { Text } from 'react-native';
import React, { memo } from 'react';
import styles from './styles';

const MText = props => {
  const { children, style, ...rest } = props;
  return (
    <Text {...rest} allowFontScaling={false} style={[style, styles.textDefault]}>
      {children}
    </Text>
  );
};

export default memo(MText);
