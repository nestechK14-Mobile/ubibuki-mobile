import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import {
  Back,
  Play,
  Star_1
} from 'assets';
import { useNavigation } from '@react-navigation/native';

interface SourseImage {
  source: ImageSourcePropType;
}

const InformationMovies = ({ source }: SourseImage) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={source} style={styles.image}>
        <View>
          <View style={styles.containerBack}>
            <TouchableOpacity onPress={goBack} style={styles.buttonSearch} activeOpacity={0.2}>
              <Image source={Back} />
            </TouchableOpacity>
          </View>
          <View style={styles.containerPlay}>
            <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.2}>
              <Image source={Play} />
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <View style={styles.container3}>
              <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.2}>
                <Image source={Star_1} style={styles.image2} />
              </TouchableOpacity>
              <Text style={styles.text}> 7.1</Text>
            </View>
          </View>
          <View style={styles.containerText1}>
            <Text style={styles.text1}> Maaveeran</Text>
          </View>
          <View style={styles.containerText1}>
            <Text style={styles.text2}> U/A - 2hrs 32 mins - Action</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InformationMovies;

const styles = StyleSheet.create({
  container: {
    width: 430,
    height: 237,
    // marginVertical: 54
  },
  image: {
    flex: 1
  },
  image2: {
    height: 20,
    width: 21
  },
  container2: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    width: 65,
    height: 30,
    borderRadius: 15,
    // marginTop: 150,
    marginLeft: 25,
    justifyContent: 'space-evenly'
  },
  container3: {
    flexDirection: 'row',
    marginTop: 5
  },
  container4: {
    flexDirection: 'row',
    marginTop: 5
  },
  containerPlay: {
    marginTop: 50,
    marginLeft: 195
  },
  containerBack: {
    marginTop: 20,
    marginLeft: 26
  },
  text: {
    fontWeight: '400',
    fontSize: 15,
    color: 'rgba(255, 255, 255, 1)'
  },
  text1: {
    fontWeight: '700',
    fontSize: 20,
    color: 'rgba(255, 255, 255, 1)'
  },
  text2: {
    fontWeight: '400',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)'
  },
  containerText1: {
    marginLeft: 25
  },

  buttonSearch: {}
});
