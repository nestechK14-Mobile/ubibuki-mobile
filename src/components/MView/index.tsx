import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { TYPE_VIEW } from '@constants/common';

const MView = ({ type, children, ...rest }) => {
  const renderComponent = (typeChild, child) => {
    switch (typeChild) {
      case TYPE_VIEW.SAFE_AREA_VIEW:
        return <SafeAreaView {...rest}>{child}</SafeAreaView>;

      case TYPE_VIEW.SCROLL_VIEW:
        return (
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            bouncesZoom={false}
            {...rest}>
            {child}
          </ScrollView>
        );

      default:
        return <View {...rest}>{child}</View>;
    }
  };

  return <>{renderComponent(type, children)}</>;
};

export default MView;
