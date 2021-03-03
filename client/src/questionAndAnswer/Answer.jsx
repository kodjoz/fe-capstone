import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHelpful: false,
      isReported: false,
    };

    this.handleHelpful = this.handleHelpful.bind(this);
    this.handleReport = this.handleReport.bind(this);
  }

  handleHelpful() {
    var currentAnswer = this.props.answer.id;
    if (!this.state.isHelpful) {
      this.props.markOrReport('answers', currentAnswer, 'helpful');
      this.setState({
        isHelpful: true
      });
    } else {
      alert('You already marked this Answer as helpful');
    }
  }

  handleReport() {
    var currentAnswer = this.props.answer.id;
    if (!this.state.isReported) {
      this.props.markOrReport('answers', currentAnswer, 'report');
      this.setState({
        isReported: true
      });
    } else {
      alert('You already reported this Answer');
    }
  }

  render() {

    if (!this.props.answer) {
      return '';
    }

    let answer = this.props.answer;
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
        <div className="answer-links">by {answer.answerer_name}, {prettyDate} | Helpful?  <LinkText onClick={this.handleHelpful}>Yes ({answer.helpfulness})</LinkText> | <LinkText onClick={this.handleReport}>{!this.state.isReported ? 'Report' : 'Reported!'}</LinkText></div>
      </AnswerContainer>
    );
  }
}

// each answer should be an object
Answer.propTypes = {
  answer: PropTypes.object.isRequired,
  markOrReport: PropTypes.func.isRequired,
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
