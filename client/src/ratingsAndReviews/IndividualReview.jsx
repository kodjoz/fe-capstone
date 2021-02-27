import React from 'react';

const IndividualReview = (props) => {
  return (
    <div>
      <p>{props.review.rating} Stars -> rendered as an img?</p>
      <span>{props.review.reviewer_name}</span>
      <span>{props.review.date} -> prettify me</span>
      <p>{props.review.summary} -> '...' truncate me into one line</p>
      <p>{props.review.body} -> slice me into 250 char, w a 'Show more' link</p>
      <p>{props.review.response} -> if i don't exist, don't show me</p>
      <p>Helpful? <a>Yes</a> ({props.review.helpfulness})</p>
      <p>{JSON.stringify(props.review)}</p>
    </div>
  );
}
// class IndividualReview extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     };
//   }

//   render(){
//     return (
//       <div>
//         <p>{this.props.reviews}</p>
//       </div>
//     );
//   }

// };

export default IndividualReview;