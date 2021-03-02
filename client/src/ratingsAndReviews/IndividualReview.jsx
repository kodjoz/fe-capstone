import React from 'react';
import PropTypes from 'prop-types';
import StarRow from '../starRow.jsx';
import styled from 'styled-components';

class IndividualReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulRated: false,
    };
  }

  helpfulVote() {
    if (this.state.helpfulRated === false) { this.props.review.helpfulness++; }
    this.setState({helpfulRated: true});
  }

  render() {
    let review = this.props.review;
    review.summary = 'It was the best of shreks, it was the worst of shreks, it was the age of shrekdom, it was the age of shrekishness, it was the epoch of shreklief, it was the epoch of inshrekulity'; //long summary test
    let summary = review.summary;
    if (summary.length > 60) {
      let cutoff = 60;
      for (let i = 55; i < review.summary.length; i++) {
        if (review.summary[i] === ' ') {
          cutoff = i;
          break;
        }
      }
      summary = <Summary><b>{review.summary.slice(0, cutoff)}...</b><br></br><SummaryExtra>...{review.summary.slice(cutoff, review.summary.length)}</SummaryExtra></Summary>;
    } else {
      summary = <Summary>{review.summary}</Summary>;
    }

    let body = null;
    review.body = 'It was the best of shreks, it was the worst of shreks, it was the age of shrekdom, it was the age of shrekishness, it was the epoch of shreklief, it was the epoch of inshrekulity, it was the shrekson of light, it was the shrekson of darkness, it was  the swamp of hope, it was the farquaad of shrekspair.'; //long summary test

    let bodyId = 'review' + review.review_id;
    let bodyShowId = bodyId + 'vis';
    if (review.body.length <= 250) {
      body = <p>{review.body}</p>;
    } else {
      body = <ReviewBody>
        <span id={bodyId}>{review.body.slice(0, 251)}
          <ShowMore id={bodyShowId} onClick={ ()=> { document.getElementById(bodyId).innerHTML = review.body; }} >Show More...</ShowMore>
        </span>
      </ReviewBody>;
    }

    let response = null;
    review.response = 'It was the best of shreks, it was the worst of shreks, it was the age of shrekdom, it was the age of shrekishness, it was the epoch of shreklief, it was the epoch of inshrekulity, it was the shrekson of light, it was the shrekson of darkness, it was  the swamp of hope, it was the farquaad of shrekspair.';
    if (review.response) {
      response = <Response><span><Seller>Seller: </Seller>{review.response}</span></Response>;
    }

    let recommend = null;
    if (review.recommend) {
      recommend = <Recommend><RedCheck>&#10003;</RedCheck><RecText>I recommend this product</RecText></Recommend>;
    }

    return (
      <Review>
        <ReviewerInfo>
          <Reviewer>@{review.reviewer_name}</Reviewer>
          <br></br>
          <ReviewDate>{new Date(review.date).toLocaleString('en-US', {month: 'long', day: '2-digit', year: 'numeric'})}</ReviewDate>
          <br></br>
          {recommend}
        </ReviewerInfo>
        <StarRow size={20} rating={review.rating * 20} />
        {/* <span>{review.reviewer_name}</span> */}
        <div>{summary}</div>
        <div>{body}</div>
        <Photos>
          {review.photos.map((photo) => {
            return (
              <Thumbnail key={review.review_id} src={photo.url} onClick={() => { console.log('open me in a modal window!'); }} />
            );
          })}
          <div className="axis main-axis"></div>
          <div className="axis cross-axis"></div>
        </Photos>
        {response}
        <Helpful>Helpful? <HelpfulVote onClick={() => { this.helpfulVote(); }}>Yes</HelpfulVote> ({review.helpfulness})</Helpful>
        {/* <p>{JSON.stringify(this.props.review)}</p> */}
      </Review>
    );
  }
}

const Review = styled.div`
  margin-top: 7px;
  padding-left: 10px;
  padding-top: 7px;
  border-bottom: 1px solid #f0f0f5;
  background-color: hsl(0, 10%, 99%);
  color: hsl(0, 5%, 30%);
  border: solid 1px #f2f2f2;
`;

const Summary = styled.div`
  font-style: italic;
  margin-bottom: 5px;
`;

const SummaryExtra = styled.span`
  font-size: 0.75em;
  font-style: italic;
  line-height: 50%;
  color: grey;
  margin-top: -5px;
  `;

const ReviewerInfo = styled.div`
  display: inline-block;
  float: right;
  margin: 5px 10% 5px 5%;
  width: 166px;
`;

const Reviewer = styled.span`
  color: hsl(0, 100%, 60%);
  font-size: 1.1em;
`;

const ReviewDate = styled.span`
  font-size: 0.75em;
  font-style: italic;
  color: grey;
  margin-left: 10%;
`;

const Recommend = styled.div`
  margin-top: -5px;
`;

const RedCheck = styled.span`
  color: hsl(0, 100%, 60%);
  font-size: 1.2em;
`;

const RecText = styled.span`
  font-size: 0.9em;
  padding-left: 2px;
`;

const ReviewBody = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 20%;
`;

const ShowMore = styled.span`
  cursor: pointer;
  font-size: 0.75em;
  font-style: italic;
  text-decoration: underline;
  color: #666666;
  margin-left: 5px;
`;

// const Photos = styled.div`
//   display: flex;
//   align-items: center;
//   justify-contents: center;
//   margin-bottom: 10px;
//   padding-left: 20%;
// `;

const Photos = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const Thumbnail = styled.img`
  display: inline-block;
  border: 1px solid #f0f0f5;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  width: 100px;
  height: 100px;
`;

const Seller = styled.b`
  font-style: italic;
`;
const Response = styled.div`
  display: block;
  background-color: hsl(270, 100%, 96%);
  border-radius: 7px;
  padding: 5px 10px;
  margin-left: 3%;
  width: 70%;
`;

const Helpful = styled.p`
  font-style: italic;
`;

const HelpfulVote = styled.span`
  cursor: pointer;
  font-style: normal;
  color: hsl(0, 100%, 50%);
  text-decoration: underline;
`;

IndividualReview.propTypes = {
  review: PropTypes.object
};

export default IndividualReview;
