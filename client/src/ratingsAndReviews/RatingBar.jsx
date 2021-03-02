import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = (props) => {
  return (<div onClick={()=>{ props.filter(); }}>
    <span>{props.stars} Stars {props.percent}</span>
  </div>);
}

RatingBar.propTypes = {
  stars: PropTypes.number,
  percent: PropTypes.number,
  filter: PropTypes.func
};

export default RatingBar;