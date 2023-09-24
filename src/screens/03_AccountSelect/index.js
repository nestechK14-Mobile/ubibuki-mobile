import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../constants/screenNames';
import styles from './styles';
import { FONTS } from '../../constants/screenNames';
//import { Image } from 'react-native-reanimated/lib/typescript/Animated';

const AccountSelect = () => {


  const nextScreen = useNavigation();
  const pressAnyAccount  = () => {
    nextScreen.navigate(SCREEN_NAME.CINEMA_LOCATION);
  };

  const nextScreen1 = useNavigation();
  const pressTerm  = () => {
    nextScreen1.navigate(SCREEN_NAME.VERIFY_MOBILE_NUMBER);
  };
  const nextScreen2 = useNavigation();
  const pressPolicy  = () => {
    nextScreen2.navigate(SCREEN_NAME.TERM_AND_CONTDITION);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View styles={styles.mainContainer}>
          <View style={styles.container}>
            <View style={styles.logoText}>
              <Image source={require('../../assets/MoviesTimesLogo.png')} />
            </View>

            <View style={styles.TextChooseAccount}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Choose an account </Text>
              <Text style={{ fontSize: 15 }}> to continue to Movie Ticket booking</Text>
            </View>

            <TouchableOpacity onPress={pressTerm}>
            <View style={styles.accountInfo}>
            <View>
            <Image style={styles.accountAvatar} source={require('../../assets/mitumi.png')} />
            </View>
            <View style={styles.accountName}>
            <Text style = {{fontFamily: FONTS.BLACK, fontSize: 18, paddingVertical:2}} >MinhTuan89</Text>
            <Text style = {{fontFamily: FONTS.LIGHT, fontSize: 16, paddingVertical:2}} >tuanbk89@gmail.com</Text>
            </View>
              </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={pressTerm}>
              <View style={styles.accountInfo}>
              <View>
              <Image style={styles.accountAvatar} source={require('../../assets/mitumi.png')} />
              </View>
              <View style={styles.accountName}>
              <Text style = {{fontFamily: FONTS.BLACK, fontSize: 18, paddingVertical:2}} >MinhTuan89</Text>
              <Text style = {{fontFamily: FONTS.LIGHT, fontSize: 16, paddingVertical:2}} >tuanbk89@gmail.com</Text>
              </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={pressPolicy}>
                <View style={styles.accountInfo}>
                <View>
                <Image style={styles.accountAvatar} source={require('../../assets/mitumi.png')} />
                </View>
                <View style={styles.accountName}>
                <Text style = {{fontFamily: FONTS.BLACK, fontSize: 18, paddingVertical:2}} >MinhTuan89</Text>
                <Text style = {{fontFamily: FONTS.LIGHT, fontSize: 16, paddingVertical:2}} >tuanbk89@gmail.com</Text>
                </View>
                  </View>
                  </TouchableOpacity>

                  {/* !!!: AddAcount */}

                  <TouchableOpacity onPress={pressAnyAccount}>
                  <View style={styles.accountInfo}>
                  <View>
                  <Image style={{marginLeft:20, width:30, height:30,resizeMode: 'contain'}} source={require('../../assets/addAccount.png')} />
                  </View>
                  <View style={styles.accountName}>
                  <Text style = {{fontFamily: FONTS.BLACK, fontSize: 18, paddingLeft:30,paddingVertical:20,}} >Add another account</Text>
                  
                  </View>
                    </View>
                    </TouchableOpacity>

                    {/* !!!: Policy and Term */}

                    <View style = {styles.PolicyAndTerm}>
                    <Text style = {{fontSize: 16}}>To contine,Google will Share your
                    name, email address and profile picture with Movies Time. Before using this app,
                    review its</Text>
                    <TouchableOpacity onPress={pressAnyAccount}> 
                    <Text style = {{fontSize: 16, fontWeight: 'bold'}}> Privacy Policy</Text>
                    </TouchableOpacity>

                    <Text style = {{fontSize: 16}}> and </Text>
                    <TouchableOpacity onPress={pressAnyAccount}>
                    <Text style = {{fontWeight:'bold'}}>Terms 
                    of Service 
                    </Text>
                    </TouchableOpacity>
                    </View>


            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  };

export default AccountSelect;
