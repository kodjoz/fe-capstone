import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RatingBar = (props) => {
  let star = 'Star';
  if (props.stars > 1) {
    star += 's';
  } else {
    star += ' ';
  }

  return (<BarFilter id={props.stars} onClick={()=>{ props.newFilter(props.stars); }}>
    <span>{props.stars} {star} {props.percent}</span>
  </BarFilter>);
};

const BarFilter = styled.div`
  cursor: pointer;
  font-size: 0.8em;
  text-decoration: underline;
`;

RatingBar.propTypes = {
  stars: PropTypes.number,
  percent: PropTypes.number,
  newFilter: PropTypes.func
};

export default RatingBar;
