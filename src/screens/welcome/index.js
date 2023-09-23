import { MHeader, MView } from '@/components';
import React from 'react';
import styles from './styles';

const WelcomeScreen = () => {
  return (
    <MView style={styles.container}>
      <MHeader rightContent={{ isPress: true, title: 'SKIP' }} />
    </MView>
  );
};

export default WelcomeScreen;
