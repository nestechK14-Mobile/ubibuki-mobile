import { View } from 'react-native';
import React from 'react';
import MText from '../MText';
import MButton from '../MButton';
import MView from '../MView';
import { IC_Back } from '@assets/icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { EMPTY_TITLE } from '@constants/common';

const MHeader = props => {
  const { options } = props;
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const LeftHeader = options?.leftComponent || null;
  const RightHeader = options?.rightComponent || null;

  return (
    <MView style={styles.container}>
      {options?.leftBack ? (
        <MButton
          onPressButton={goBack}
          content={() => (
            <>
              <IC_Back />
            </>
          )}
        />
      ) : options?.leftIcon || options?.leftTitle ? (
        <MButton
          onPressButton={options?.leftFunction || null}
          buttonStyle={options?.leftContainerStyle || null}
          content={() => (
            <>
              {options?.leftIcon || (
                <MText style={options?.leftTitleStyle || null}>
                  {options?.leftTitle || EMPTY_TITLE}
                </MText>
              )}
            </>
          )}
        />
      ) : options?.leftComponents ? (
        <>{options?.leftComponents()}</>
      ) : (
        <MView />
      )}
      {options?.rightTitle ? (
        <MButton
          onPressButton={options?.rightFunction || null}
          content={() => (
            <>
              <MText style={options?.rightTitleStyle || null}>
                {options?.rightTitle || EMPTY_TITLE}
              </MText>
            </>
          )}
        />
      ) : options?.rightIcon ? (
        <MButton
          onPress={options?.rightFunction || null}
          content={() => <>{options?.rightIcon || null}</>}
        />
      ) : options?.rightComponent ? (
        <>{options?.rightComponent()}</>
      ) : (
        <MView />
      )}
    </MView>
  );
};

export default MHeader;
