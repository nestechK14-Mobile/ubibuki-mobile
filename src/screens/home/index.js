import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { IMG_LogoPopCorn } from '../../assets/images';
import { SCREEN_NAME } from '../../constants/router';
import styles from '../home/styles';
import LoginGoogle from './sections/login';
import PhoneNumber from './sections/phone';

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
