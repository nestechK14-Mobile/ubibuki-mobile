import React from 'react';
import MView from '@components/MView';
import { TYPE_VIEW } from '@constants/common';
import MHeader from '@components/MHeader';
import { IMG_TitleLogo } from '@assets/images';
import MButton from '@components/MButton';
import { IC_Search } from '@assets/icons';
import MLoading from '@components/MLoading';
import MText from '@components/MText';
import Banner from './components/banner';
import styles from './styles';
import BookTicket from './sections/bookTicket';
import UpcomingMovie from './sections/upcoming';
import { LIST_BANNER_DUMMY, LIST_MOVIE_BOOKING } from '@utils/dummyData';
import { scale } from '@utils/scale';

const MoviesScreen = () => {
  const onRightHeaderSearch = () => {};

  const headerOptions = {
    leftComponents: () => (
      <>
        <IMG_TitleLogo />
      </>
    ),
    rightIcon: <IC_Search />,
    rightFunction: onRightHeaderSearch
  };

  return (
    <MView type={TYPE_VIEW.SAFE_AREA_VIEW} style={styles.container}>
      <MView type={TYPE_VIEW.SCROLL_VIEW}>
        <MHeader options={headerOptions} />
        <MView type={TYPE_VIEW.SAFE_AREA_VIEW} style={{ alignItems: 'center' }}>
          <Banner listData={LIST_BANNER_DUMMY} />
        </MView>
        <BookTicket data={LIST_MOVIE_BOOKING} />
        <UpcomingMovie />
      </MView>
    </MView>
  );
};

export default MoviesScreen;
