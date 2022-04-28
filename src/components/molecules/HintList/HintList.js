import React from 'react';
import { Wrapper } from 'components/molecules/HintList/HintList.styles';

const HintList = ({ students }) => {
  return (
    <Wrapper>{students.map((student, i) => (i < 6 ? <li>{student.name}</li> : null))}</Wrapper>
  );
};

export default HintList;
