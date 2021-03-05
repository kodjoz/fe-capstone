import React from 'react';
import PropTypes from 'prop-types';
import { StyleType } from '../types.js';
import ThumbnailRows from './ThumbnailRows';

const StyleSelector = (props) => {
  // if there are no styles, or none is selected, do not render component
  if (!props.selectedStyle || props.styles.length === 0) {
    return null;
  }
  return (
    <div>
      <h3>STYLE &gt; {props.selectedStyle.name}</h3>
      <ThumbnailRows selectedStyle={props.selectedStyle} styles={props.styles} />
    </div>
  );
};

StyleSelector.propTypes = {
  selectedStyle: StyleType,
  styles: PropTypes.arrayOf(StyleType)
};

export default StyleSelector;
