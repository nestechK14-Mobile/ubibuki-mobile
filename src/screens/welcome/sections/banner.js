import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { IMG_August, IMG_Banner, IMG_Vihham } from '../../../assets/images';
import { IC_Point_1, IC_Point_2, IC_Point_3 } from '../../../assets/icons';

const banner = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={IMG_Banner} />
      </View>
      <View style={styles.point}>
        <Image source={IC_Point_1} />
        <Image source={IC_Point_2} />
        <Image source={IC_Point_3} />
      </View>
      <Text style={styles.book}>Book Tickets</Text>
      <View style={styles.vihhamaugust}>
        <Image source={IMG_Vihham} />
        <Image source={IMG_August} />
      </View>
    </>
  );
};

export default banner;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  point: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  book: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  vihhamaugust: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
