import { StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import MView from '@components/MView';
import MText from '@components/MText';
import { LIST_BANNER_DUMMY } from '@utils/dummyData';
import { DEVICE, SPACING, scale } from '@utils/scale';
import { COLORS } from '@constants/colors';

const Banner = props => {
  const { listData, renderElements, timeDelay = 2000 } = props;
  const [activeBanner, setActiveBanner] = useState(0);
  const listRef = useRef();

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeBanner === listData?.length - 1) {
        listRef.current.scrollToIndex({
          index: 0,
          animation: true
        });
      } else {
        listRef.current.scrollToIndex({
          index: activeBanner + 1,
          animation: true
        });
      }
    }, timeDelay);

    return () => {
      clearInterval(interval);
    };
  });

  const handleScroll = event => {
    setActiveBanner(event.nativeEvent.contentOffset.x / DEVICE.WIDTH);
  };

  const renderItem = ({ item, index }) => {
    const Image = item?.image;
    return (
      <MView style={{ width: DEVICE.WIDTH, alignItems: 'center' }}>
        <Image />
      </MView>
    );
  };

  const getItemLayout = (data, index) => ({
    length: DEVICE.WIDTH,
    offset: DEVICE.WIDTH * index,
    index
  });

  return (
    <MView style={styles.container}>
      <FlatList
        ref={listRef}
        style={{ flexGrow: 0 }}
        data={listData ?? LIST_BANNER_DUMMY}
        renderItem={renderElements?.() ?? renderItem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        keyExtractor={(item, index) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        getItemLayout={getItemLayout}
      />
      <MView style={styles.dotIndicatorContainer}>
        {listData &&
          listData?.map((item, index) => {
            return (
              <MView
                key={item.id}
                style={
                  activeBanner === index ? styles.dotIndicatorActive : styles.dotIndicatorInActive
                }
              />
            );
          })}
      </MView>
    </MView>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    paddingBottom: scale(16),
    alignItems: 'center'
  },

  dotIndicatorInActive: {
    width: SPACING.Medium,
    height: SPACING.Medium,
    borderRadius: SPACING.Medium,
    backgroundColor: COLORS.BRIGHT_GRAY
  },
  dotIndicatorActive: {
    width: SPACING.Medium,
    height: SPACING.Medium,
    borderRadius: SPACING.Medium,
    backgroundColor: COLORS.DEEP_CARMINE_PINK
  },
  dotIndicatorContainer: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: SPACING.Fit
  }
});
