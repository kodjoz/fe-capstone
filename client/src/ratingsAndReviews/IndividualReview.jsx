import React from 'react';
import PropTypes from 'prop-types';

const IndividualReview = (props) => {
  return (
    <div>
      <p>{props.review.rating} Stars - rendered as an img?</p>
      <span>{props.review.reviewer_name}</span>
      <p>{new Date(props.review.date).toLocaleString("en-US", {month: "long", day: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit"})}</p>
      <p>{props.review.summary} - <em>use ... to truncate me into one line</em></p>
      <p>{props.review.body} - <em>slice me into 250 char, w a <b>Show more</b> link</em></p>
      <p>{props.review.response} - <em>if i dont exist, dont show me</em></p>
      <p>Helpful? <a>Yes</a> ({props.review.helpfulness})</p>
      {/* <p>{JSON.stringify(props.review)}</p> */}
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