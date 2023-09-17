import React, { memo } from 'react';
import MView from '../MView';
import MText from '../MText';
import { VIEW_TYPE } from '@/constants';
import MButton from '../MButton';
import MImage from '../MImage';
import styles from './styles';

const MHeader = props => {
  const { leftContent = {}, rightContent = {}, title = '', ...rest } = props;

  const renderContent = content => {
    const {
      isPress = false,
      isView = false,
      title = '',
      icon = null,
      noChildren = false,
      newChildren
    } = content;

    return (
      <>
        {noChildren && <MView type={VIEW_TYPE.VIEW} />}
        {newChildren && newChildren?.()}
        {isPress && (
          <MButton {...rest}>
            {title && <MText {...rest}>{title}</MText>}
            {icon && <MImage source={icon} />}
          </MButton>
        )}
        {isView && (
          <MView {...rest}>
            {title && <MText {...rest}>{title}</MText>}
            {icon && <MImage source={icon} />}
          </MView>
        )}
      </>
    );
  };

  return (
    <MView type={VIEW_TYPE.VIEW} style={styles.container}>
      {/* {renderContent(leftContent)}
      {title && <MText>{title}</MText>}
      {renderContent(rightContent)} */}
      <MText>Header Content</MText>
    </MView>
  );
};

export default memo(MHeader);
