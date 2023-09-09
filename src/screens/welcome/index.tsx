import React, { useState } from 'react';
import styles from './styles';
import { IMG_AppLogo, IMG_Google } from '@assets/images';
import MView from '@components/MView';
import { EMPTY_STRING, TEXT_LENGTH, TYPE_VIEW } from '@constants/common';
import MText from '@components/MText';
import MHeader from '@components/MHeader';
import MButton from '@components/MButton';
import { SPACING } from '@utils/scale';
import { SCREEN_NAMES } from '@constants/screenNames';
import { useNavigation } from '@react-navigation/native';
import MTextInput from '@components/MTextInput';
import { IC_Next } from '@assets/icons';
import { validatePhone } from '@utils/helpers';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorPhone, setErrorPhone] = useState('');

  const onRightSkip = () => {
    navigation.navigate(SCREEN_NAMES.TAB_STACK);
  };

  const headerOptions = {
    rightTitle: 'SKIP',
    rightTitleStyle: styles.rightTitleHeader,
    rightFunction: onRightSkip
  };

  const inputOptions = {
    titleInput: 'Mobile Number',
    styleTitleInput: styles.titleInput,
    placeholder: '+84...',
    errorInput: errorPhone
  };

  const loginWithGoogle = () => {};

  const loginWithEmail = () => {};

  const onChangePhoneNumber = (text: string) => {
    if (!text) {
      setErrorPhone('');
    }
    setPhoneNumber(text);
  };

  const goToPhoneRegister = () => {
    let errorValidatePhoneNumber = '';
    if (!phoneNumber) {
      errorValidatePhoneNumber = 'Bạn cần nhập số điện thoại!';
    } else if (phoneNumber.length < TEXT_LENGTH.PHONE_NUMBER) {
      errorValidatePhoneNumber = 'Số điện thoại phải đủ 10 số';
    } else if (!validatePhone(phoneNumber)) {
      errorValidatePhoneNumber = 'Số điện thoại không đúng định dạng. Vui lòng nhập lại!';
    }
    errorValidatePhoneNumber ? setErrorPhone(errorValidatePhoneNumber) : setErrorPhone('');
    !errorValidatePhoneNumber && navigation.navigate(SCREEN_NAMES.TAB_STACK);
  };

  return (
    <MView type={TYPE_VIEW.SAFE_AREA_VIEW} style={styles.container}>
      <MHeader options={headerOptions} />
      <MView
        type={TYPE_VIEW.SCROLL_VIEW}
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets={true}>
        <MView type={TYPE_VIEW.VIEW} style={styles.bodyContainer}>
          <IMG_AppLogo />
          <MButton
            buttonStyle={[styles.buttonDefault, styles.buttonGoogle]}
            onPressButton={loginWithGoogle}
            content={() => (
              <MView type={TYPE_VIEW.VIEW} style={{ flexDirection: 'row' }}>
                <IMG_Google />
                <MText style={[styles.buttonTitleDefault, { marginLeft: SPACING.Normal }]}>
                  {'Log with Google'}
                </MText>
              </MView>
            )}
            hitSlop={2}
          />
          <MButton
            buttonStyle={styles.buttonDefault}
            onPressButton={loginWithEmail}
            content={'Log with Email'}
            contentStyle={styles.buttonTitleDefault}
          />
        </MView>
        <MView style={styles.lineSeparate}>
          <MView style={styles.line} />
          <MText style={styles.titleDefault}>or</MText>
          <MView style={styles.line} />
        </MView>
        <MView style={styles.middleContainer}>
          <MTextInput
            options={inputOptions}
            value={phoneNumber}
            onChangeText={text => onChangePhoneNumber(text)}
          />
          {phoneNumber && (
            <MView style={{ alignItems: 'center', marginTop: 16 }}>
              <MButton
                content={() => (
                  <>
                    <IC_Next />
                  </>
                )}
                buttonStyle={styles.buttonNext}
                onPressButton={goToPhoneRegister}
              />
            </MView>
          )}
        </MView>
      </MView>
      <MView style={styles.bottomContainer}>
        <MText style={styles.titleBottom}>I agree to the</MText>
        <MText style={styles.titleBottomUnderline}>Term & Conditions</MText>
        <MText style={styles.titleBottom}>and</MText>
        <MText style={styles.titleBottomUnderline}>Privacy Policy</MText>
      </MView>
    </MView>
  );
};

export default WelcomeScreen;
