import { View, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import React, { memo } from 'react';
import MLoading from '../MLoading';
import { VIEW_TYPE } from '@/constants/common';

const MView = props => {
  const { type = VIEW_TYPE.VIEW, children, isLoading = false, contentStyle = {}, ...rest } = props;

  const renderContent = (type, styles) => {
    switch (type) {
      case VIEW_TYPE.SAFE_AREA_VIEW:
        return (
          <SafeAreaView style={styles} {...rest}>
            {isLoading ? <MLoading /> : null}
            {children}
          </SafeAreaView>
        );

      case VIEW_TYPE.SCROLL_VIEW:
        return (
          <ScrollView style={styles} {...rest}>
            {isLoading && <MLoading />}
            {children}
          </ScrollView>
        );

      case VIEW_TYPE.KEYBOARD_AVOIDING_VIEW:
        return (
          <KeyboardAvoidingView style={styles} {...rest}>
            {isLoading && <MLoading />}
            {children}
          </KeyboardAvoidingView>
        );

      default:
        return (
          <View style={styles} {...rest}>
            {isLoading ? <MLoading /> : null}
            {children}
          </View>
        );
    }
  };

  return <>{renderContent(type, contentStyle)}</>;
};

export default memo(MView);
