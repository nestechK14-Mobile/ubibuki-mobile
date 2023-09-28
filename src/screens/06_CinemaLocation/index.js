import { React, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FONTS, SCREEN_NAME } from '../../constants/screenNames';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';

const CinemaLocation = () => {
  const [location, setLocation] = useState('');
  const toCinemaLocation = useNavigation();
  const GoToMovieSelect = () => {
    toCinemaLocation.navigate(SCREEN_NAME.MOVIE_SELECT);
  };

  return (
    <View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20
        }}>
        <Image source={require('../../assets/MoviesTimesLogo.png')}></Image>
        <Image source={require('../../assets/locationLogo.png')}></Image>
      </View>

      <View
        style={{
          borderWidth: 2,
          margin: 15,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 10
        }}>
        <Image source={require('../../assets/SearchVector.png')}></Image>
        <TextInput
          value={location}
          onChangeText={text => setLocation(text)}
          placeholder="Search Location"
          style={{ fontFamily: FONTS.EXTRA_BOLD, fontSize: 18 }}
        />
      </View>

      <Text
        style={{
          paddingHorizontal: 15,
          fontSize: 20,
          fontWeight: 700,
          fontFamily: FONTS.BOLD
        }}>
        Top Cities
      </Text>

      <View style = {{flexDirection : 'row',justifyContent: 'space-around', padding: 10}}>
      <TouchableOpacity style= {{
        borderRadius: 20,
        borderColor: '#F84464',
        borderWidth: 2
      }}>
      <Text style = {{paddingVertical: 5,
        fontSize: 20,
         paddingHorizontal: 20}}>
      Hà Nội
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style= {{
        borderRadius: 20,
        borderColor: '#F84464',
        borderWidth: 2
      }}>
      <Text style = {{paddingVertical: 5,
        fontSize: 20,
         paddingHorizontal: 20}}>
      Hà Nội
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style= {{
        borderRadius: 20,
        borderColor: '#F84464',
        borderWidth: 2
      }}>
      <Text style = {{paddingVertical: 5,
        fontSize: 20,
         paddingHorizontal: 20}}>
      Hà Nội
      </Text>
      </TouchableOpacity>
      
      </View>

      <View style = {{flexDirection : 'row',justifyContent: 'space-around', padding: 10}}>
      <TouchableOpacity style= {{
        borderRadius: 20,
        borderColor: '#F84464',
        borderWidth: 2
      }}>
      <Text style = {{paddingVertical: 5,
        fontSize: 20,
         paddingHorizontal: 20}}>
      Hà Nội
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style= {{
        borderRadius: 20,
        borderColor: '#F84464',
        borderWidth: 2
      }}>
      <Text style = {{paddingVertical: 5,
        fontSize: 20,
         paddingHorizontal: 20}}>
      Hà Nội
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style= {{
        borderRadius: 20,
        borderColor: '#F84464',
        borderWidth: 2
      }}>
      <Text style = {{paddingVertical: 5,
        fontSize: 20,
         paddingHorizontal: 20}}>
      Hà Nội
      </Text>
      </TouchableOpacity>
      
      </View>

      <View style = {{flexDirection : 'row',justifyContent: 'space-around', padding: 10}}>
      <TouchableOpacity style= {{
        borderRadius: 20,
        borderColor: '#F84464',
        borderWidth: 2
      }}>
      <Text style = {{paddingVertical: 5,
        fontSize: 20,
         paddingHorizontal: 20}}>
      Hà Nội
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style= {{
        borderRadius: 20,
        borderColor: '#F84464',
        borderWidth: 2
      }}>
      <Text style = {{paddingVertical: 5,
        fontSize: 20,
         paddingHorizontal: 20}}>
      Hà Nội
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style= {{
        borderRadius: 20,
        borderColor: '#F84464',
        borderWidth: 2
      }}>
      <Text style = {{paddingVertical: 5,
        fontSize: 20,
         paddingHorizontal: 20}}>
      Hà Nội
      </Text>
      </TouchableOpacity>
      
      </View>


      <Text
      style={{
      
        paddingHorizontal: 15,
        fontSize: 20,
        fontWeight: 700,
        fontFamily: FONTS.BOLD
      }}>
      Top Cinema
    </Text>


    <ScrollView  style={{ flexGrow: 1, position: 'relative' }}
    contentContainerStyle={{ paddingVertical: 10 }}
    bounces={false}
    showsVerticalScrollIndicator={false}>
    <View>
    
    <TouchableOpacity style = {{marginHorizontal: 20,borderBottomWidth : 0.6}}>
    <Text style = {{fontSize: 16,fontFamily: FONTS.BLACK,padding: 20}}>Galaxy Hoàn Kiếm</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style = {{marginHorizontal: 20,borderBottomWidth : 0.6}}>
    <Text style = {{fontSize: 16,fontFamily: FONTS.BLACK,padding: 20}}>Galaxy Nguyễn Du</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style = {{marginHorizontal: 20,borderBottomWidth : 0.6}}>
    <Text style = {{fontSize: 16,fontFamily: FONTS.BLACK,padding: 20}}>Galaxy Hoàn Kiếm</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style = {{marginHorizontal: 20,borderBottomWidth : 0.6}}>
    <Text style = {{fontSize: 16,fontFamily: FONTS.BLACK,padding: 20}}>Galaxy Nguyễn Du</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style = {{marginHorizontal: 20,borderBottomWidth : 0.6}}>
    <Text style = {{fontSize: 16,fontFamily: FONTS.BLACK,padding: 20}}>Galaxy Hoàn Kiếm</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style = {{marginHorizontal: 20,borderBottomWidth : 0.6}}>
    <Text style = {{fontSize: 16,fontFamily: FONTS.BLACK,padding: 20}}>Galaxy Nguyễn Du</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{marginHorizontal: 20,borderBottomWidth : 0.6}}>
    <Text style = {{fontSize: 16,fontFamily: FONTS.BLACK,padding: 20}}>Galaxy Hoàn Kiếm</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style = {{marginHorizontal: 20,borderBottomWidth : 0.6}}>
    <Text style = {{fontSize: 16,fontFamily: FONTS.BLACK,padding: 20}}>Galaxy Nguyễn Du</Text>
    </TouchableOpacity>
    
    </View>
    
    </ScrollView>
   




    </View>
  );
};

export default CinemaLocation;
