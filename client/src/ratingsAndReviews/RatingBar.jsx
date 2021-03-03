import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ClickableText } from '../globalStyles.js';

const RatingBar = (props) => {
  let star = 'Star';
  if (props.stars > 1) {
    star += 's';
  } else {
    star += ' ';
  }

  return (<StarBar id={props.stars} onClick={()=>{ props.newFilter(props.stars); }}>
    <span>{props.stars} {star} {Math.round(props.percent)}</span>
  </StarBar>);
};

const StarBar = styled(ClickableText)`
  display: block;
`;

RatingBar.propTypes = {
  stars: PropTypes.number,
  percent: PropTypes.number,
  newFilter: PropTypes.func
};

export default RatingBar;
