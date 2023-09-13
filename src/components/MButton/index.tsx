import { View, TouchableOpacity, ViewStyle, TextStyle, Text, Insets } from 'react-native';
import React from 'react';
import MText from '../MText';
import MView from '../MView';

interface ButtonProps {
  content: any;
  contentStyle?: ViewStyle | TextStyle;
  onPressButton?: () => void;
  buttonStyle?: ViewStyle;
  activeOpacity?: number;
  hitSlop?: any;
}

const MButton = (props: ButtonProps) => {
  const {
    content,
    contentStyle = {},
    onPressButton,
    buttonStyle,
    activeOpacity = 0.8,
    hitSlop = 1.5,
    ...rest
  } = props;

  const renderChildren = (content: any, style: ViewStyle | TextStyle) => {
    if (!content) {
      return null;
    }

    switch (typeof content) {
      case 'string':
      case 'number':
        return (
          <MText style={style} allowFontScaling={false}>
            {content}
          </MText>
        );

      case 'function':
        return <View style={style}>{content?.()}</View>;

      default:
        return <View />;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPressButton}
      style={buttonStyle}
      activeOpacity={activeOpacity}
      hitSlop={hitSlop}
      {...rest}>
      {renderChildren(content, contentStyle)}
    </TouchableOpacity>
  );
};

export default MButton;
