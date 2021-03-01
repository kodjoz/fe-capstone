import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHelpful: false,
      isReported: false,
    }
  }
  // takes the answers property from the question
  // convert the keys to an array
  // if array length is zero just return an empty string
  // if loadMoreAnswers is clicked then render all answers
  // else just render up to two answers

  render() {

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
        <div className="answer-links">by {answer.answerer_name}, {prettyDate} | Helpful?  <LinkText>Yes ({answer.helpfulness})</LinkText> | <LinkText>Report</LinkText></div>
      </AnswerContainer>
    );
  }
};

// each answer should be an object
Answer.propTypes = {
  answer: PropTypes.object.isRequired,
  markA: PropTypes.func
};

const AnswerContainer = styled.div`
  grid-area: answerContainer;
  grid-row: span 1;
`;

const LinkText = styled.span`
  text-decoration: underline;
  :hover {
    text-decoration: none;
  }
`;

// accidentally deleted my branch
export default Answer;
