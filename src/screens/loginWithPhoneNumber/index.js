import React from 'react';
import { MHeader, MText, MView } from '@/components';
import styles from './styles';
import { IC_Back } from '@/assets';
import { useNavigation } from '@react-navigation/native';

const LoginWithPhoneNumber = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <MView style={styles.container}>
      <MHeader
        leftContent={{
          title: 'Back',
          onPress: goBack,
          iconStyle: styles.leftHeader
        }}
      />
      <MView>
        <MText>123</MText>
      </MView>
    </MView>
  );
};

export default LoginWithPhoneNumber;
