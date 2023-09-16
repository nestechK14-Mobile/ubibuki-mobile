import { ActivityIndicator } from 'react-native';
import React, { memo } from 'react';
import MView from '../MView';
import { COLORS } from '../../constants/common';
import styles from './styles';

const MLoading = props => {
  const { ...rest } = props;
  return (
    <MView style={styles.container}>
      <ActivityIndicator size={'large'} color={COLORS.RED_500} {...rest} />
    </MView>
  );
};

export default memo(MLoading);
