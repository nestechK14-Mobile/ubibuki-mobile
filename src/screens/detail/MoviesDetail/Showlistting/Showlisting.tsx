import React, { useRef } from 'react';
import { StyleSheet} from 'react-native';
import Title from './title';
import Schedule from './schedule';
import { SafeAreaView } from 'react-native-safe-area-context';
import Parking from './ParkingMain.tsx/Parking';

const ShowlistingContent = () => {
  return (
    <SafeAreaView>
      <Schedule />
      <Title source={'A R K Ram Muthu Ram Cinema Rgb Dolby Atoms'}></Title>
      <Parking source={'Parking   4k   More Info'}/>
      <Title source={'PSS Multiplex Cinema Rgb Dolby Atoms'}/>
      <Parking source={'Parking   4k   More Info'}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 32
  }
});

export default ShowlistingContent;
