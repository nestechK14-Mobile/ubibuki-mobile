import { IC_Next, IMG_AppLogo, IMG_Google } from '@/assets';
import { MButton, MHeader, MImage, MInput, MText, MView } from '@/components';
import { COLORS, SCREENS_NAME, VIEW_TYPE } from '@/constants';
import { scale } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Platform } from 'react-native';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { signInGoogle } from '@/redux/authStore/slice';

const WelcomeScreen = () => {
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onPhoneLogin = () => {
    navigation.navigate(SCREENS_NAME.LOGIN_WITH_PHONE_NUMBER);
  };

  const onEmailLogin = () => {
    navigation.navigate(SCREENS_NAME.LOGIN_WITH_EMAIL);
  };

  const onGoogleLogin = () => {
    dispatch(signInGoogle());
  };

  return (
    <MView type={VIEW_TYPE.SAFE_AREA_VIEW} style={styles.container}>
      <MHeader />
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
          behavior={Platform.OS === 'android' ? 'padding' : undefined}
          style={styles.container}>
          <MView style={styles.bodyContainer}>
            <MImage source={IMG_AppLogo} />
            <MButton style={styles.buttonBody} onPress={onGoogleLogin}>
              <MView style={styles.contentButtonGoogle}>
                <MImage source={IMG_Google} />
                <MText>{t('WELCOME.SIGN_IN_GOOGLE')}</MText>
              </MView>
            </MButton>
            <MButton style={[styles.buttonBody, { marginTop: scale(0) }]} onPress={onEmailLogin}>
              <MText>{t('WELCOME.SIGN_IN_EMAIL')}</MText>
            </MButton>
            <MView style={styles.containerDivide}>
              <MView style={styles.lineDivide} />
              <MText style={styles.titleDivide}>{t('COMMON.OR')}</MText>
              <MView style={styles.lineDivide} />
            </MView>
            <MView style={styles.bottomContainer}>
              <MInput
                containerInput={styles.containerInput}
                title={t('COMMON.MOBILE_NUMBER')}
                placeholder={'+84 ...'}
                inputStyle={styles.inputMobile}
                value={phone}
                onChangeText={text => setPhone(text)}
              />
            </MView>
          </MView>
          {phone && (
            <MButton style={styles.buttonNext} onPress={onPhoneLogin}>
              <MImage source={IC_Next} tintColor={COLORS.WHITE} />
            </MButton>
          )}
        </MView>
      </MView>
      <MView style={styles.containerTitleBottom}>
        <MText style={styles.titleBottom}>{t('WELCOME.AGREE_CONDITION.FIRST_SENTENCES')}</MText>
        <MText style={styles.mainTitleBottom}>{t('WELCOME.AGREE_CONDITION.TERM_CONDITIONS')}</MText>
        <MText style={styles.titleBottom}>{t('COMMON.AND')}</MText>
        <MText style={styles.mainTitleBottom}>{t('WELCOME.AGREE_CONDITION.PRIVACY_POLICY')}</MText>
      </MView>
    </MView>
  );
};

export default WelcomeScreen;
