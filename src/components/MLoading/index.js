import { COLORS } from '@/constants';
import React, { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';

const MLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={COLORS.RED_500} />
    </View>
  );
};

export default memo(MLoading);
