import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { IPropsText } from '../../constants/types';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { translate as trans } from 'i18n/index';
import { COLORS } from '../../constants/colors';

const selectText = createSelector(
  state => state.setting.lang,
  (_, children) => children,
  (_, children) => trans(children, { locale: _ || 'vi' })
);

const MText = (props: IPropsText) => {
  const { children, translate = true, style, numberOfLines, ...restStyleText } = props;
  const lang = useSelector(state => selectText(state, children));

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.titleDefault, style]}
      maxFontSizeMultiplier={1}
      allowFontScaling={false}
      {...restStyleText}>
      {translate ? lang + ' ' : children}
    </Text>
  );
};

const styles = StyleSheet.create({
  titleDefault: {
    color: COLORS.BLACK
  }
});

export default MText;
