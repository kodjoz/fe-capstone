import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  };
  // pretty print the date
  let prettyDate = new Date(answer.date).toLocaleDateString('en-US', options);

  return (
    <AnswerContainer>
      <div className="answer"><strong>A:</strong> {answer.body}</div>
      <div className="answer-links">by {answer.answerer_name}, {prettyDate} | Helpful? <a>Yes</a> ({answer.helpfulness}) | <a>Report</a></div>
    </AnswerContainer>
  );
};

// each answer should be an object
Answer.propTypes = {
  answer: PropTypes.object.isRequired
};

const AnswerContainer = styled.div`
  grid-area: AnswerContainer;
  grid-row: span 1;
`;

// accidentally deleted my branch
export default Answer;
