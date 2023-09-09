import { View, Text } from 'react-native';
import React from 'react';
import MView from '@components/MView';
import Banner from '@screens/movies/components/banner';
import { LIST_BANNER_DUMMY } from '@utils/dummyData';

const UpcomingMovie = () => {
  const renderItem = ({ item, index }) => {
    const Image = item?.image;
    return (
      <MView style={{ width: DEVICE.WIDTH, alignItems: 'center' }}>
        <Image />
        <MView>
          <MText>04/09/2023</MText>
        </MView>
      </MView>
    );
  };

  return (
    <MView style={{ flex: 1 }}>
      <Banner dotIndicator={true} listData={LIST_BANNER_DUMMY} renderItem={renderItem} />
    </MView>
  );
};

export default UpcomingMovie;
