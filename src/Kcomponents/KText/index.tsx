import React from 'react';
import { Text } from 'react-native';
import KView from 'Kcomponents/KView';
import { TYPE_VIEW } from 'Kconstants/common';
import { constrainedMemory } from 'process';
import styles from './styles';

interface KTextProps {
    children: React.ReactNode;
    style?: object;
    numberOfLines?: number;
  }
  const KText: React.FC<KTextProps> = (props: KTextProps) => {
    const {children, style, numberOfLines = 1, ...resChildren} = props;
    return(
        <Text
        style = {[styles.textDefault, style]}
        maxFontSizeMultiplier={1}
        allowFontScaling = {false}
        adjustsFontSizeToFit
        numberOfLines={numberOfLines}
        {...resChildren}
        >
            {children}
        </Text>

    )
}
export default KText;