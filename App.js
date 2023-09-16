import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  LogBox,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

LogBox.ignoreAllLogs();
const MainStack = createNativeStackNavigator();

const WIDTH_SCREEN = Dimensions.get('screen').width;
const HEIGHT_SCREEN = Dimensions.get('screen').height;

console.log('WIDTH', WIDTH_SCREEN);

const DetailScreen = () => {
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View />
        <Text style={[styles.textDefault, styles.textHeader]} allowFontScaling={false}>
          Skip
        </Text>
      </View>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 0 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
        bouncesZoom={false}
        keyboardShouldPersistTaps={'handled'}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={116}
          behavior={Platform.OS == 'android' ? 'position' : 'padding'}
          style={styles.container}>
          <View style={styles.bodyContainer}>
            <Image source={require('./assets/IMG_LogoApp.png')} />
            <View style={styles.containerButton}>
              <TouchableOpacity style={[styles.buttonDefault, styles.buttonGoogle]}>
                <Image source={require('./assets/IMG_Google.png')} style={{ marginRight: 12 }} />
                <Text allowFontScaling={false} style={[styles.textDefault, styles.buttonTitle]}>
                  Log With Google
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttonDefault, styles.buttonEmail]}>
                <Text allowFontScaling={false} style={[styles.textDefault, styles.buttonTitle]}>
                  Log With Email
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerDivide}>
              <View style={styles.line} />
              <Text allowFontScaling={false} style={[styles.textDefault]}>
                Or
              </Text>
              <View style={styles.line} />
            </View>
            <View style={{ alignItems: 'flex-start', width: WIDTH_SCREEN * 0.9 }}>
              <Text allowFontScaling={false} style={[styles.textDefault]}>
                Mobile Number
              </Text>
              <View style={styles.containerInput}>
                <TextInput placeholder={'+84 ...'} placeholderTextColor={'black'} />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 16,
    position: 'absolute',
    zIndex: 9999,
    right: 0
  },
  textDefault: {
    color: 'black'
  },
  textHeader: {
    fontSize: 20,
    fontWeight: '400'
  },
  bodyContainer: {
    alignItems: 'center',
    marginTop: 64
  },
  containerButton: {
    marginTop: 38
  },
  buttonDefault: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000012',
    width: WIDTH_SCREEN * 0.9,
    borderRadius: 10,
    paddingVertical: 16
  },
  buttonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonEmail: {
    marginTop: 32
  },
  buttonTitle: {
    fontSize: 17,
    fontWeight: '500'
  },
  line: {
    height: 1,
    width: '40%',
    backgroundColor: 'black',
    marginHorizontal: 16
  },
  containerDivide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 16
  },
  containerInput: {
    backgroundColor: '#00000012',
    width: '100%',
    marginTop: 8,
    borderRadius: 10,
    paddingHorizontal: 24
  }
});

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
        <MainStack.Screen name={'HomeScreen'} component={HomeScreen} />
        <MainStack.Screen name={'DetailScreen'} component={DetailScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App