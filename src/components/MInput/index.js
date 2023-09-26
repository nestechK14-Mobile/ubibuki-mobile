import React from 'react';
import MText from '../MText';
import MView from '../MView';

const MInput = props => {
  const { title } = props;
  return (
    <MView>
      <MText>{title}</MText>
    </MView>
  );
};

export default MInput;
