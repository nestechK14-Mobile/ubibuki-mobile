import { isEmpty } from 'lodash';
import React, { memo } from 'react';
import MButton from '../MButton';
import MImage from '../MImage';
import MText from '../MText';
import MView from '../MView';
import styles from './styles';

const MHeader = props => {
  const {
    leftContent = {},
    rightContent = {},
    mainTitle = '',
    containerStyle = {},
    ...rest
  } = props;

  return (
    <MView style={!isEmpty(containerStyle) ? containerStyle : styles.container} {...rest}>
      {!isEmpty(leftContent) ? (
        <MView style={leftContent.containerStyle} {...rest}>
          {leftContent.newChildren && leftContent.newChildren?.()}
          {leftContent.isPress && (
            <MButton style={leftContent.containerStyle} onPress={leftContent.onPress} {...rest}>
              {leftContent.title && (
                <MText style={leftContent.titleStyle} {...rest}>
                  {leftContent.title}
                </MText>
              )}
              {leftContent.icon && (
                <MImage source={leftContent.icon} style={leftContent.iconStyle} />
              )}
            </MButton>
          )}
          {leftContent.isView && (
            <MView style={leftContent.containerStyle} {...rest}>
              {leftContent.title && (
                <MText style={leftContent.titleStyle} {...rest}>
                  {leftContent.title}
                </MText>
              )}
              {leftContent.icon && (
                <MImage source={leftContent.icon} style={leftContent.iconStyle} />
              )}
            </MView>
          )}
        </MView>
      ) : (
        <MView />
      )}
      {mainTitle ? <MText {...rest}>{mainTitle}</MText> : <></>}
      {!isEmpty(rightContent) ? (
        <>
          {rightContent.newChildren && rightContent.newChildren?.()}
          {rightContent.isPress && (
            <MButton style={rightContent.containerStyle} onPress={rightContent.onPress} {...rest}>
              {rightContent.title && (
                <MText style={rightContent.titleStyle} {...rest}>
                  {rightContent.title}
                </MText>
              )}
              {rightContent.icon && (
                <MImage source={rightContent.icon} style={rightContent.iconStyle} />
              )}
            </MButton>
          )}
          {rightContent.isView && (
            <MView style={rightContent.containerStyle} {...rest}>
              {rightContent.title && (
                <MText style={rightContent.titleStyle} {...rest}>
                  {rightContent.title}
                </MText>
              )}
              {rightContent.icon && (
                <MImage source={rightContent.icon} style={rightContent.iconStyle} />
              )}
            </MView>
          )}
        </>
      ) : (
        <MView />
      )}
    </MView>
  );
};

export default memo(MHeader);
