import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { IMG_LogoGoogle } from 'assets';

const LoginGoogle = () => {
  return (
    <View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={[styles.buttonDefault, styles.buttonGoogle]}>
          <Image source={IMG_LogoGoogle} style={{ marginRight: 12 }} />
          <Text allowFontScaling={false} style={[styles.textDefault, styles.buttonDefault]}>
            Log with google
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={[styles.buttonDefault, styles.buttonEmail]}>
          <Text allowFontScaling={false} style={[styles.textDefault, styles.buttonTitle]}>
            Log With Email
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerDivide}>
        <View style={styles.line} />
        <Text allowFontScaling={false} style={styles.textDefault}>
          Or
        </Text>
        <View style={styles.line} />
      </View>
    </View>
  );
};
export default LoginGoogle;
