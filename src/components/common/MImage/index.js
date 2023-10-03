import { IMAGE_TYPE } from '@/constants/common';
import React, { memo } from 'react';
import FastImage from 'react-native-fast-image';
import { Image } from 'react-native';

const MImage = props => {
  const { type = IMAGE_TYPE.IMAGE, imageStyle = {}, ...rest } = props;

  const renderContent = type => {
    switch (type) {
      case IMAGE_TYPE.IMAGE_URL:
        return <FastImage style={imageStyle} {...rest} />;

      default:
        return <Image style={imageStyle} {...rest} />;
    }
  };

  return <>{renderContent(type)}</>;
};

export default memo(MImage);
