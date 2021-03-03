import React from 'react';
import PropTypes from 'prop-types';
import StarRow from '../starRow';

const StarRating = (props) => {
  // if there are no reviews, do not render this component
  if (props.count === 0) {
    return '';
  }
  // StarRow expects a rating out of 100, not 5, so multiply by 20
  const average = (props.sum / props.count) * 20;

  return (
    <div>
      <StarRow rating={average * 20} />
      <span to="#reviews">Read all {props.count} reviews</span>
    </div>
  );
};

StarRating.propTypes = {
  count: PropTypes.number,
  sum: PropTypes.number
};

export default StarRating;
