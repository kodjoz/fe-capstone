import React from 'react';
import PropTypes from 'prop-types';

class IndividualReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // reviewBodyExtra: props.review.body.length > 250 ? props.review.body.slice(251, props.review.body.length) : null
    };
  }
  render() {
    // let body;
    // if (props.review.body.length <= 250) {
    //   body = <p>{props.review.body}</p>
    // } else {
    //   body = <p id='review-body'>{props.review.body.slice(0,250) + '...'}
    //   <span onClick={() => {document.getElementById('review-body').value = this.state.reviewBodyExtra}}>Show more...</span>
    //   </p>
    // }
    let review = this.props.review;
    return (
      <div>
        <p>{review.rating} Stars - rendered as an img?</p>
        <span>{review.reviewer_name}</span>
        <p>{new Date(review.date).toLocaleString('en-US', {month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
        <b>{review.summary} - <em>use ... to truncate me into one line</em></b>
        <p>{review.body} - <em>slice me into 250 char, w a <b>Show more</b> link</em></p>
        <p>{review.response} - <em>if i dont exist, dont show me</em></p>
        <p>Helpful? <a>Yes</a> ({review.helpfulness})</p>
        {/* <p>{JSON.stringify(props.review)}</p> */}
      </div>
    );
  }
};

IndividualReview.propTypes = {
  review: PropTypes.object
};

export default IndividualReview;
