import { ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import InformationMovies from './Components/Information/InformationMovies';
import { Maaveeran } from 'assets';
import styles from './styles';
import SlideList from './MoviesDetail/slideList';
import ShowlistingContent from './MoviesDetail/Showlistting/showListing';

const DetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InformationMovies source={Maaveeran} />

      <SlideList />

      <ScrollView>
        <ShowlistingContent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
