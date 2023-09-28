import { React, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FONTS, SCREEN_NAME } from '../../constants/screenNames';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import DEVICE from '../../lib/scale.js';
//import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import { Dimensions } from 'react-native';
const MovieSelect = () => {
  const [location, setLocation] = useState('');
  const toCinemaLocation = useNavigation();
  const GoToMovieSelect = () => {
    toCinemaLocation.navigate(SCREEN_NAME.MOVIE_SELECT);
  };
  const windowWidth = Dimensions.get('window').width;

  return (
    <View>
      {/* !!!: HEADER */}
      <View
        style={{
          marginTop: 25,
          marginBottom: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingBottom: 20,
          borderBottomWidth: 2,
          borderColor: 'gray'
        }}>
        <Image source={require('../../assets/MoviesTimesLogo.png')}></Image>
        <Image source={require('../../assets/Searchblack.png')}></Image>
      </View>
      {/* !!!: slide
    
    */}

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={windowWidth} //your element width
          snapToAlignment="center"
          //scrollToOverflowEnabled
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: windowWidth, paddingBottom: 10, alignItems: 'center' }}>
              <Image source={require('../../assets/SliderPhoto.png')}></Image>
            </View>
            <View style={{ width: windowWidth, paddingBottom: 10, alignItems: 'center' }}>
              <Image source={require('../../assets/SliderPhoto.png')}></Image>
            </View>
            <View style={{ width: windowWidth, paddingBottom: 10, alignItems: 'center' }}>
              <Image source={require('../../assets/SliderPhoto.png')}></Image>
            </View>
            <View style={{ width: windowWidth, paddingBottom: 10, alignItems: 'center' }}>
              <Image source={require('../../assets/SliderPhoto.png')}></Image>
            </View>
            <View style={{ width: windowWidth, paddingBottom: 10, alignItems: 'center' }}>
              <Image source={require('../../assets/SliderPhoto.png')}></Image>
            </View>
          </View>
        </ScrollView>
      </View>



      {/*Scroll Book Ticket*/}



      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.movies}>

              {/* !!!: Book Ticket */}
      <Text
      style={{
        paddingHorizontal: 15,
        fontSize: 20,
        fontWeight: 700,
        fontFamily: FONTS.BOLD,
        paddingVertical: 10
      }}>
      Book Ticket
    </Text>
          <View
            style={{ paddingVertical: 10, justifyContent: 'space-evenly', flexDirection: 'row' }}>
            <View style={{}}>
              <Image source={require('../../assets/MaaveeRan.png')}></Image>

              <View
                style={{
                  marginHorizontal: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../../assets/Star.png')}></Image>
                  <Text style={{ fontSize: 15, fontWeight: 500 }}> 7.1</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 15, fontWeight: 500 }}>170k</Text>
                  <Text style={{ fontSize: 15 }}> votes</Text>
                </View>
              </View>
              <Text style={{ fontSize: 20, fontWeight: 400, fontFamily: FONTS.BOLD }}>
                {' '}
                MaaveeRan
              </Text>
            </View>
            {/*ảnh 2 ngang*/}
            <View style={{}}>
              <Image source={require('../../assets/Vikaram.png')}></Image>

              <View
                style={{
                  marginHorizontal: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../../assets/Star.png')}></Image>
                  <Text style={{ fontSize: 15, fontWeight: 500 }}> 9.5</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 15, fontWeight: 500 }}>170k</Text>
                  <Text style={{ fontSize: 15 }}> votes</Text>
                </View>
              </View>
              <Text style={{ fontSize: 20, fontWeight: 400, fontFamily: FONTS.BOLD }}>
                {' '}
                Vikaram
              </Text>
            </View>
          </View>

          {/*2 ảnh ngang tiếp theo*/}

          <View
            style={{
              paddingVertical: 10,
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}>
            <View style={{}}>
              <Image source={require('../../assets/JohnWick.png')}></Image>

              <View
                style={{
                  marginHorizontal: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../../assets/Star.png')}></Image>
                  <Text style={{ fontSize: 15, fontWeight: 500 }}> 7.1</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 15, fontWeight: 500 }}>170k</Text>
                  <Text style={{ fontSize: 15 }}> votes</Text>
                </View>
              </View>
              <Text style={{ fontSize: 20, fontWeight: 400, fontFamily: FONTS.BOLD }}>
                {' '}
                John Wick
              </Text>
            </View>
            {/*ảnh 2 ngang*/}
            <View style={{}}>
              <Image source={require('../../assets/fastX.png')}></Image>

              <View
                style={{
                  marginHorizontal: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../../assets/Star.png')}></Image>
                  <Text style={{ fontSize: 15, fontWeight: 500 }}> 9.5</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 15, fontWeight: 500 }}>170k</Text>
                  <Text style={{ fontSize: 15 }}> votes</Text>
                </View>
              </View>
              <Text style={{ fontSize: 20, fontWeight: 400, fontFamily: FONTS.BOLD }}> Fast X</Text>
            </View>
          </View>
   {/* !!!: Up Comming */}
   <Text
   style={{
     paddingHorizontal: 15,
     fontSize: 20,
     fontWeight: 700,
     fontFamily: FONTS.BOLD,
     paddingVertical: 10
   }}>
   Upcoming Movies
 </Text>
 <View>
 <ScrollView
   horizontal
   showsHorizontalScrollIndicator={false}
   snapToInterval={windowWidth} //your element width
   snapToAlignment="center"
   //scrollToOverflowEnabled
 >
   <View style={{ flexDirection: 'row' }}>
     <View style={{ width: windowWidth, paddingBottom: 10, alignItems: 'center' }}>
       <Image source={require('../../assets/SliderPhoto.png')}></Image>
     </View>
     <View style={{ width: windowWidth, paddingBottom: 10, alignItems: 'center' }}>
       <Image source={require('../../assets/upcoming.png')}></Image>
     </View>
     <View style={{ width: windowWidth, paddingBottom: 10, alignItems: 'center' }}>
       <Image source={require('../../assets/SliderPhoto.png')}></Image>
     </View>
     <View style={{ width: windowWidth, paddingBottom: 10, alignItems: 'center' }}>
       <Image source={require('../../assets/upcoming.png')}></Image>
     </View>
     <View style={{ width: windowWidth, paddingBottom: 10, alignItems: 'center' }}>
       <Image source={require('../../assets/SliderPhoto.png')}></Image>
     </View>
   </View>
 </ScrollView>
</View>

















        </View>
      </ScrollView>
    </View>
  );
};

export default MovieSelect;
