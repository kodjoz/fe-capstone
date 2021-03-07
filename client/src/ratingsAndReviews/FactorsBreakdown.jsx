import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Palette } from '../globalStyles.js';
import FactorBar from './FactorBar.jsx';

const FactorsBreakdown = (props) => {
  let ranges = {
    Size: ['too small', 'just right', 'too wide'],
    Width: ['too narrow', 'just right', 'too wide'],
    Length: ['runs short', 'just right', 'runs long'],
    Fit: ['runs tight', 'just right', 'runs long'],
    Comfort: ['uncomfortable', 'okay', 'perfect'],
    Quality: ['poor', 'as expected', 'perfect']
  };
  return (
    <Breakdown>
      <Title>Factors</Title>
      {props.characteristics.map((characteristic)=>{
        return (
          <FactorBar key={characteristic.id} name={characteristic.name} value={characteristic.value} range={ranges[characteristic.name]}></FactorBar>
        );
      })}
      {/* <FactorBar name={'Size'} range={['too small', 'just right', 'too wide']}></FactorBar>
      <FactorBar name={'Width'} range={['too narrow', 'just right', 'too wide']}></FactorBar>
      <FactorBar name={'Length'} range={['runs short', 'just right', 'runs long']}></FactorBar>
      <FactorBar name={'Fit'} range={['runs tight', 'just right', 'runs long']}></FactorBar>
      <FactorBar name={'Comfort'} range={['uncomfortable', 'okay', 'perfect']}></FactorBar>
      <FactorBar name={'Quality'} range={['poor', 'as expected', 'perfect']}></FactorBar> */}
    </Breakdown>
  );
};

const Breakdown = styled.div`
  margin-top: 1.5rem;
  padding-left: 0.5rem;
`;

const Title = styled.div`
margin-bottom: 0.5rem;
text-decoration: underline;
color: ${Palette.black};
`;

FactorsBreakdown.propTypes = {
  characteristics: PropTypes.array
};

export default FactorsBreakdown;
