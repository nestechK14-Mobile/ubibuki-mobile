import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import MView from '@components/MView';
import MText from '@components/MText';
import { DEVICE, SPACING, scale } from '@utils/scale';
import { FONTS } from '@constants/fonts';
import { IC_Star } from '@assets/icons';
import { COLORS } from '@constants/colors';

const BookTicket = props => {
  const { data } = props;

  const renderItem = ({ item, index }) => {
    const ImageItem = item?.image;
    return (
      <MView style={styles.item}>
        <ImageItem />
        <MView style={styles.itemName}>
          <MView style={styles.itemNameLeft}>
            <IC_Star />
            <MText>{item?.star}</MText>
          </MView>
          <MView style={styles.itemNameRight}>
            <MText style={styles.itemNameRightTitle}>{item?.vote}</MText>
            <MText style={styles.itemNameRightContent}>votes</MText>
          </MView>
        </MView>
        <MView>
          <MText>{item?.name}</MText>
        </MView>
      </MView>
    );
  };

  return (
    <MView style={styles.container}>
      <MText style={styles.titleSection}>Book Tickets</MText>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        style={{ marginTop: SPACING.XNormal }}
      />
    </MView>
  );
};

export default BookTicket;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SPACING.Normal
  },
  titleSection: {
    fontFamily: FONTS.BOLD,
    fontSize: SPACING.XXXMedium
  },
  row: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingBottom: SPACING.XNormal
  },
  item: {
    marginHorizontal: scale(12),
    alignItems: 'center',
    width: '50%'
  },
  itemName: {
    backgroundColor: COLORS.BRIGHT_GRAY,
    marginTop: SPACING.Normal,
    padding: SPACING.Small,
    borderRadius: SPACING.Normal,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: scale(16),
    width: '100%'
  },
  itemNameLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    justifyContent: 'space-evenly'
  },
  itemNameRight: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  itemNameRightTitle: {
    fontSize: SPACING.XXNormal,
    fontFamily: FONTS.REGULAR,
    color: COLORS.BLACK,
    right: SPACING.Tiny
  },
  itemNameRightContent: {
    fontSize: SPACING.XXNormal,
    fontFamily: FONTS.REGULAR,
    color: COLORS.DARK_LIVER
  }
});
