import { IMG_AppLogo, IMG_Google } from '@/assets';
import { MButton, MHeader, MImage, MInput, MText, MView } from '@/components';
import { SCREENS_NAME, VIEW_TYPE } from '@/constants';
import { scale } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform } from 'react-native';
import styles from './styles';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const onSkip = () => {
    navigation.navigate(SCREENS_NAME.TAB_STACK);
  };

  return (
    <MView type={VIEW_TYPE.SAFE_AREA_VIEW} style={styles.container}>
      <MHeader
        rightContent={{
          isPress: true,
          title: 'SKIP',
          titleStyle: styles.rightTitleHeader,
          onPress: onSkip
        }}
      />
      <MView
        type={VIEW_TYPE.SCROLL_VIEW}
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
        bouncesZoom={false}
        keyboardShouldPersistTaps={'handled'}
        automaticallyAdjustKeyboardInsets={true}>
        <MView
          type={VIEW_TYPE.KEYBOARD_AVOIDING_VIEW}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.container}>
          <MView style={styles.bodyContainer}>
            <MImage source={IMG_AppLogo} />
            <MButton style={styles.buttonBody}>
              <MView style={styles.contentButtonGoogle}>
                <MImage source={IMG_Google} />
                <MText>Log With Google</MText>
              </MView>
            </MButton>
            <MButton style={[styles.buttonBody, { marginTop: scale(0) }]}>
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
            </MView>
          </MView>
        </MView>
      </MView>
      <MView style={styles.containerTitleBottom}>
        <MText style={styles.titleBottom}>I agree to the</MText>
        <MText style={styles.mainTitleBottom}>Term & Conditions</MText>
        <MText style={styles.titleBottom}>and</MText>
        <MText style={styles.mainTitleBottom}>Privacy Policy</MText>
      </MView>
    </MView>
  );
};

export default WelcomeScreen;
