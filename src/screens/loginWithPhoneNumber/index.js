import React from 'react';
import { MHeader, MView } from '@/components';
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
          icon: IC_Back,
          onPress: goBack
        }}
      />
    </MView>
  );
};

export default LoginWithPhoneNumber;
