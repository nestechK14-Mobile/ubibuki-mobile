import React from 'react';
import styles from './styles';
import MImage from '@/components/MImage';
import MView from '@/components/MView';
import { IMAGE_TYPE } from '@/constants/common';
import { IMG_AppLogo } from '@/assets/images';

const WelcomeScreen = () => {
  return (
    <MView style={styles.container}>
      <MImage type={IMAGE_TYPE.IMAGE} source={IMG_AppLogo} />
    </MView>
  );
};

export default WelcomeScreen;
