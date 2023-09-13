import { StyleSheet, View, ActivityIndicator } from 'react-native';
import React from 'react';
import MView from '../MView';

const MLoading = () => {
  return (
    <MView style={styles.container}>
      <ActivityIndicator size={'large'} />
    </MView>
  );
};

export default MLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
