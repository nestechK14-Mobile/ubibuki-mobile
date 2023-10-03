import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import React from 'react';
import styles from '../home/styles';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from 'constants';
import { IMG_LogoPopCorn } from '../../assets/images';
import LoginGoogle from './login/loginGoogle';
import PhoneNumber from './phone/phoneNumber';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 0 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
        bouncesZoom={false}
        keyboardShouldPersistTaps={'handle'}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={32}
          behavior={Platform.OS == 'android' ? 'position' : 'padding'}
          style={styles.container}>
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
            <LoginGoogle />
            <PhoneNumber />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
