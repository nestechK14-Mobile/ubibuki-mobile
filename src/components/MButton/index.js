import { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import React, { memo } from 'react';
import { BUTTON_TYPE } from '@/constants';

const MButton = props => {
  const { type = BUTTON_TYPE.BUTTON, children, ...rest } = props;

  const renderContent = type => {
    switch (type) {
      case BUTTON_TYPE.NOT_FEEDBACK:
        return <TouchableWithoutFeedback {...rest}>{children}</TouchableWithoutFeedback>;

      case BUTTON_TYPE.BUTTON_HIGHLIGHT:
        return <TouchableHighlight {...rest}>{children}</TouchableHighlight>;

      default:
        return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
    }
  };

  return <>{renderContent(type)}</>;
};

export default memo(MButton);
