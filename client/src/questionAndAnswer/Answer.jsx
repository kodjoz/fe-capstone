import React from 'react';
import PropTypes from 'prop-types';

const Answer = (props) => {
  // takes the answers property from the question
  // convert the keys to an array
  // if array length is zero just return an empty string
  // if loadMoreAnswers is clicked then render all answers
  // else just render up to two answers
  if (!props.answer) {
    return '';
  }

  let answer = props.answer;
  // Options needed to pretty-print the date
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  // pretty print the date
  let prettyDate = new Date(answer.date).toLocaleDateString('en-US', options);

  return (
    <div className="answer">
      <p><strong>A:</strong>{answer.body}</p>
      <span>by {answer.answerer_name}, {prettyDate} | Helpful? <a>Yes</a> ({answer.helpfulness}) | <a>Report</a></span>
    </div>
  );
}

Answer.propTypes = {
  answer: PropTypes.object.isRequired
};
// each answer should be an object
export default Answer;
