import React from 'react';
import styles from './styles';
import { MHeader, MView } from '@/components';

const WelcomeScreen = () => {
  return (
    <MView style={styles.container}>
      <MHeader
        leftContent={{ isPress: true, title: 'Back' }}
        rightContent={{ isPress: true, title: 'Back' }}
      />
    </MView>
  );
};

export default WelcomeScreen;
