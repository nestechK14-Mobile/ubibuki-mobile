import { IMG_AppLogo, IMG_Google } from '@/assets';
import { MButton, MHeader, MImage, MInput, MText, MView } from '@/components';
import { scale } from '@/utils';
import React from 'react';
import styles from './styles';

const WelcomeScreen = () => {
  return (
    <MView style={styles.container}>
      <MHeader
        rightContent={{ isPress: true, title: 'SKIP', titleStyle: styles.rightTitleHeader }}
      />
      <MView style={styles.bodyContainer}>
        <MImage source={IMG_AppLogo} />
        <MButton style={styles.buttonBody}>
          <MView style={styles.contentButtonGoogle}>
            <MImage source={IMG_Google} />
            <MText>Log With Google</MText>
          </MView>
        </MButton>
        <MButton style={[styles.buttonBody, { marginTop: scale(16) }]}>
          <MText>Log With Email</MText>
        </MButton>
        <MView style={styles.containerDivide}>
          <MView style={styles.lineDivide} />
          <MText style={styles.titleDivide}>or</MText>
          <MView style={styles.lineDivide} />
        </MView>
        <MView style={styles.bottomContainer}>
          <MInput />
        </MView>
      </MView>
    </MView>
  );
};

export default WelcomeScreen;
