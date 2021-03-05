import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Palette } from '../globalStyles.js';

const FactorBar = (props) => {
  return (
    <Factor>
      <Name>{props.name}</Name>
      <Indicator location={props.average}>&#9662;</Indicator>
      <FullBar><Bar></Bar><Bar></Bar><Bar></Bar></FullBar>
      <Values>
        <Value>{props.range[0]}</Value>
        <Value>{props.range[1]}</Value>
        <Value>{props.range[2]}</Value>
      </Values>
    </Factor>
  );
};

const Factor = styled.div`
padding-bottom: 5px;
`;

const Name = styled.span`
  display: block;
  font-style: italic;
  margin-bottom: 10px;
`;

const Indicator = styled.div`
  position: relative;
  z-index: 2;
  font-size: 1.25em;
  color: ${Palette.primary};
  margin-top: -20px;
  margin-left: 50%;
`;

const FullBar = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: -12px;
`;

const Bar = styled.div`
  background-color: hsla(0, 0%, 85%, 60%);
  width: 31.5%;
  height: 7px;
  border: 1px solid ${Palette.borderGrey};
  display: flex;
`;

const Values = styled.div`
  width: 100%;
  padding: 0 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Value = styled.span`
  font-size: 0.8em;
  color: hsl(0, 0%, 40%);
  font-style: italic;
`;

FactorBar.propTypes = {
  name: PropTypes.string,
  range: PropTypes.array,
  average: PropTypes.number
};

export default FactorBar;