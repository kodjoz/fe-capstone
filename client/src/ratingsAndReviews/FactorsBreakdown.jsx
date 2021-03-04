import React from 'react';
import styled from 'styled-components';
import { Palette } from '../globalStyles.js';

const FactorsBreakdown = () => {
  return (
    <Breakdown>
      <Title>Factors</Title>
      <Title2>Factors</Title2>
      <Title3>Factors</Title3>
      <Title4>Factors</Title4>
      <Title5>Factors</Title5>
      <Title6>Factors</Title6>
      <Title7>Factors</Title7>
      <Factor>
        <Name>Size</Name>

      </Factor>
    </Breakdown>
  );
};

const Breakdown = styled.div`
  margin-top: 15px;
  padding-left: 5px;
`;

const Title = styled.div`
  text-decoration: underline;
  color: ${Palette.primary};
`;
const Title2 = styled.div`
  text-decoration: underline;
  color: ${Palette.secondary};
`;
const Title3 = styled.div`
  text-decoration: underline;
  color: ${Palette.lowPriority};
`;
const Title4 = styled.div`
  text-decoration: underline;
  color: ${Palette.black};
`;
const Title5 = styled.div`
  text-decoration: underline;
  color: ${Palette.foreground};
`;
const Title6 = styled.div`
  text-decoration: underline;
  color: ${Palette.background};
`;
const Title7 = styled.div`
  text-decoration: underline;
  color: ${Palette.borderGrey};
`;


const Factor = styled.div`
`;

const Name = styled.span``;


export default FactorsBreakdown;