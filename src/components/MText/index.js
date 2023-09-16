import { Text } from 'react-native';
import React from 'react';

const MText = props => {
  const { children, ...rest } = props;
  return <Text {...rest}>{children}</Text>;
};

export default MText;
