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
    <MView containerStyle={containerStyle ?? styles.container}>
      {!isEmpty(leftContent) ? (
        <MView containerStyle={leftContent.containerStyle}>
          {leftContent.newChildren && leftContent.newChildren?.()}
          {leftContent.isPress && (
            <MButton {...rest}>
              {leftContent.title && <MText {...rest}>{leftContent.title}</MText>}
              {leftContent.icon && <MImage source={leftContent.icon} />}
            </MButton>
          )}
          {leftContent.isView && (
            <MView {...rest}>
              {leftContent.title && <MText {...rest}>{leftContent.title}</MText>}
              {leftContent.icon && <MImage source={leftContent.icon} />}
            </MView>
          )}
        </MView>
      ) : (
        <MView />
      )}
      {mainTitle ? <MText>{mainTitle}</MText> : <></>}
      {rightContent ? (
        <MView containerStyle={rightContent.containerStyle}>
          {rightContent.newChildren && rightContent.newChildren?.()}
          {rightContent.isPress && (
            <MButton {...rest}>
              {rightContent.title && <MText {...rest}>{rightContent.title}</MText>}
              {rightContent.icon && <MImage source={rightContent.icon} />}
            </MButton>
          )}
          {rightContent.isView && (
            <MView {...rest}>
              {rightContent.title && <MText {...rest}>{rightContent.title}</MText>}
              {rightContent.icon && <MImage source={rightContent.icon} />}
            </MView>
          )}
        </MView>
      ) : (
        <MView />
      )}
    </MView>
  );
};

export default memo(MHeader);
