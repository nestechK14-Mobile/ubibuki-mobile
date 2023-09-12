import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { TYPE_VIEW } from '../../Kconstants/common';

interface KViewProps {
  type: string; 
  children: React.ReactNode;
}

const KView: React.FC<KViewProps> = ({ type, children, ...rest }) => {
  const renderComponent = (typeChild: string, child: React.ReactNode) => {
    switch (typeChild) {
      case TYPE_VIEW.SAFE_AREA_VIEW:
        return <SafeAreaView {...rest}>{child}</SafeAreaView>;

      case TYPE_VIEW.SCROLLVIEW:
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

export default KView;
