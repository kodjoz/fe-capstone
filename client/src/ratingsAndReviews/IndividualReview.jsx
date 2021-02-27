import React from 'react';
import PropTypes from 'prop-types';

class IndividualReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulRated: false
      // reviewBodyExtra: props.review.body.length > 250 ? props.review.body.slice(251, props.review.body.length) : null
    };
  }
  helpfulVote() {
    if (this.state.helpfulRated === false) { this.props.review.helpfulness++; }
    this.setState({helpfulRated: true});
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
    let response = null;
    //review.response = 'im a seller and give me all ya monayyyy~';
    if (review.response) {
      response = <p className='seller-response'>{review.response}</p>
    }
    return (
      <div>
        <p>{review.rating} Stars - rendered as an img?</p>
        <span>{review.reviewer_name}</span>
        <p>{new Date(review.date).toLocaleString('en-US', {month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
        <b>{review.summary} - <em>use ... to truncate me into one line</em></b>
        <p>{review.body} - <em>slice me into 250 char, w a <b>Show more</b> link</em></p>
        <span>{response}</span>
        <p>Helpful? <span onClick={() => { this.helpfulVote(); }}>Yes</span> {review.helpfulness}</p>
        <p>{JSON.stringify(this.props.review)}</p>
      </div>
    );
  }
}

IndividualReview.propTypes = {
  review: PropTypes.object
};

export default IndividualReview;
