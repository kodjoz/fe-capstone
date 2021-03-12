import React from 'react';
import styled from 'styled-components';
import { StyleType } from './types.js';

const PriceContainer = styled.p`
  padding: 0.5rem;
`;

const StruckSpan = styled.span`
  text-decoration: line-through;
  padding-right: 1rem;
`;

const ColorSpan = styled.span`
  color: ${props => props.theme.primaryDark};
`;

const DisplayPrice = styled.span`
  color: ${props => props.theme.primaryText};
  font-weight: 300;
`;

const PriceDisplay = (props) => {
  if (!props.selectedStyle) {
    return '';
  }
  if (props.selectedStyle.sale_price) {
    return (
      <PriceContainer>
        <StruckSpan>${props.selectedStyle.original_price}</StruckSpan>
        <ColorSpan>${props.selectedStyle.sale_price}</ColorSpan>
      </PriceContainer>
    );
  } else {
    return (
      <PriceContainer>
        <DisplayPrice>${props.selectedStyle.original_price}</DisplayPrice>
      </PriceContainer>
    );
  }
};

PriceDisplay.propTypes = {
  selectedStyle: StyleType
};

export default PriceDisplay;

