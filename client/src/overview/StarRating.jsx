import React from 'react';
import PropTypes from 'prop-types';
import StarRow from '../starRow';
import styled from 'styled-components';
import { ClickableText } from '../globalStyles';

const ReviewLink = styled(ClickableText)`
  font-size: 1.6rem;
  align-self: center;
  margin-left: 2rem;
`;

const StarRating = (props) => {
  // if there are no reviews, do not render this component
  if (props.count === 0) {
    return '';
  }
  // StarRow expects a rating out of 100, not 5, so multiply by 20
  const average = (props.sum / props.count) * 20;

  return (
    <div style={{display: 'flex'}}>
      <StarRow rating={average * 20} size={30} />
      <ReviewLink>Read all {props.count} reviews</ReviewLink>
    </div>
  );
};

StarRating.propTypes = {
  count: PropTypes.number,
  sum: PropTypes.number
};

export default StarRating;
