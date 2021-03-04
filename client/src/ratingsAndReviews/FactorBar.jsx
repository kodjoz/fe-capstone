import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Palette, ClickableText } from '../globalStyles.js';

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
`;

const FullBar = styled.div`
  width: 100%;
  margin-top: 3px;
  display: flex;
  justify-content: space-between;
`;

const Bar = styled.div`
  background-color: hsla(0, 0%, 85%, 60%);
  width: 31.5%;
  height: 7px;
  border: 1px solid ${Palette.borderGrey};
  display: flex;
`;

const Indicator = styled.span`
  display: inline;
  font-size: 1.25em;
  color: ${Palette.primary};
  margin-left: 50%;
`;

const Name = styled.span`
  display: block;
  font-style: italic;
`;

const Values = styled.div`
  width: 100%
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Value = styled(ClickableText)`
  text-decoration: none;
  font-style: italic;
`;

FactorBar.propTypes = {
  name: PropTypes.string,
  range: PropTypes.array,
  average: PropTypes.number
};

export default FactorBar;