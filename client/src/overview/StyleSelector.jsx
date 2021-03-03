import React from 'react';
import PropTypes from 'prop-types';
import { StyleType } from './types.js';

const StyleSelector = () => {
  return (
    <h3>Style</h3>
  );
};

StyleSelector.propTypes = {
  styles: PropTypes.arrayOf(StyleType)
};

export default StyleSelector;
