import React from 'react';
import PropTypes from 'prop-types';

const StarButton = (props) => {
  return <div onClick = {props.onClick}>★</div>;
};

StarButton.propTypes = {
  onClick: PropTypes.func.isRequired
};


export default StarButton;
