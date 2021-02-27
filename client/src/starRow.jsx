import React from 'react';
import styled from 'styled-components';


const StyledStarRow = styled.div`

  display: inline-block;
  font-size: 50px;
  font-family: Times;

`;

const StarRow = () => {
  return (
    <div>
      <StyledStarRow rating={(4 / 5) * 100}></StyledStarRow>
    </div>
  );
};

export default StarRow;