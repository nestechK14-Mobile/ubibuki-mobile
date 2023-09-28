import { IMG_AppLogo, IMG_Google } from '@/assets';
import { MButton, MHeader, MImage, MInput, MText, MView } from '@/components';
import { SCREENS_NAME } from '@/constants';
import { scale } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styles from './styles';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const onSkip = () => {
    navigation.navigate(SCREENS_NAME.TAB_STACK);
  };

  return (
    <MView style={styles.container}>
      <MHeader
        rightContent={{
          isPress: true,
          title: 'SKIP',
          titleStyle: styles.rightTitleHeader,
          onPress: () => onSkip()
        }}
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
          <MInput
            containerInput={styles.containerInput}
            title={'Mobile number'}
            placeholder={'+84 ...'}
            inputStyle={styles.inputMobile}
          />
          <MView style={styles.containerTitleBottom}>
            <MText style={styles.titleBottom}>I agree to the</MText>
            <MText style={styles.mainTitleBottom}>Term & Conditions</MText>
            <MText style={styles.titleBottom}>and</MText>
            <MText style={styles.mainTitleBottom}>Privacy Policy</MText>
          </MView>
        </MView>
      </MView>
    </MView>
  );
};

export default WelcomeScreen;
