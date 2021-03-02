import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = (props) => {
  let star = 'Star';
  if (props.stars > 1) {
    star += 's';
  }
  return (<div id={props.stars} onClick={()=>{ props.newFilter(props.stars); }}>
    <span>{props.stars} {star} {props.percent}</span>
  </div>);
};

RatingBar.propTypes = {
  stars: PropTypes.number,
  percent: PropTypes.number,
  filter: PropTypes.func
};

export default RatingBar;
