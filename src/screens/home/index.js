import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import React from 'react';
import styles from '../home/styles';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from 'constants';
import { IMG_LogoGoogle, IMG_LogoPopCorn } from '../../assets/images';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View />
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAME.WELCOME_SCREEN)}>
          <Text style={styles.titleRightHeader} allowFontScaling={false}>
            SKIP
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <Image source={IMG_LogoPopCorn} />
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.buttonGoogle}>
            <Image source={IMG_LogoGoogle} style={{ marginRight: 12 }} />
            <Text allowFontScaling={false}>Log With Google</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonGoogle}>
            <Text allowFontScaling={false} style={styles.textDefault}>
              Log With Email
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.line} />
          <text style={styles.textDefault}>Or</text>
          <View style={styles.line} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
