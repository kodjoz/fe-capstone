import React from 'react';
import PropTypes from 'prop-types';

const IndividualReview = (props) => {
  return (
    <div>
      <p>{props.review.rating} Stars - rendered as an img?</p>
      <span>{props.review.reviewer_name}</span>
      <span>{props.review.date} - prettify me</span>
      <p>{props.review.summary} - <em>...</em> truncate me into one line</p>
      <p>{props.review.body} - slice me into 250 char, w a <em>Show more</em> link</p>
      <p>{props.review.response} - if i dont exist, dont show me</p>
      <p>Helpful? <a>Yes</a> ({props.review.helpfulness})</p>
      <p>{JSON.stringify(props.review)}</p>
    </div>
  );
};

IndividualReview.propTypes = {
  review: PropTypes.object
//   review.rating: PropTypes.number,
//   review.reviewer_name: PropTypes.string,
//   review.date: PropTypes.string,
//   review.summary: PropTypes.string,
//   review.body: PropTypes.string,
//   review.response: PropTypes.string,
//   review.helpfulness: PropTypes.number
};

export default IndividualReview;