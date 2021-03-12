import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyleType } from '../types.js';
import ThumbnailRows from './ThumbnailRows';

const Header = styled.h3`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 2rem;
`;

const BoldSpan = styled.span`
  font-weight: bold;
  padding-right: 1rem;
`;

const StyleSelector = (props) => {
  // if there are no styles, or none is selected, do not render component
  if (!props.selectedStyle || props.styles.length === 0) {
    return null;
  }
  return (
    <div>
      <Header>
        <BoldSpan>style &gt;</BoldSpan>
        {props.selectedStyle.name}
      </Header>
      <ThumbnailRows
        selectedStyle={props.selectedStyle}
        styles={props.styles}
        setStyle={props.setStyle} />
    </div>
  );
};

StyleSelector.propTypes = {
  selectedStyle: StyleType,
  styles: PropTypes.arrayOf(StyleType),
  setStyle: PropTypes.func
};

export default StyleSelector;
