import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

import Answer from './Answer';
import { HelpfulLink } from './Answer';
import AddAnswer from './AddAnswerForm';
import { Helpful, HelpfulYes, Tile } from '../globalStyles.js';


class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: [],
      answerResults: [],
      isHelpful: false,
      isReported: false,
      isAddAnswerVisible: false,
    };

    this.toggleAddAnswer = this.toggleAddAnswer.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
  }
  // get question helpfulness
  // set the helpfulness based on component did mount
  // if the state updates then query the server to get the question helpfulness
  // send message to API to mark question as helpful
  getAnswers(page, count) {
    return axios.get(`/api/qa/questions/${this.props.question.question_id}/answers`, {
      params: {
        page: page,
        count: count
      }
    })
      .then(({ data }) => {
      // console.log(data.results);
        if (data === undefined) {
          return;
        } else {
          data.results.sort((a, b) => {
            return b.helpfulness - a.helpfulness;
          });
        }
        this.setState({ answers: data.results });
      })
      .catch(err => console.error('There was an error fetching answers on page load', err));

  }

  componentDidMount() {
    return this.getAnswers(1, 2);
  }

  handleHelpfulOrReport(endpoint) {

    if (this.state.isHelpful && endpoint === 'helpful') {
      alert('You already marked this as helpful!');
    } else if (this.state.isReported && endpoint === 'report') {
      alert('You already reported this question!');
    } else {
      this.props.markOrReport('questions', this.props.question.question_id, endpoint);
      if (endpoint === 'helpful') {
        this.setState({ isHelpful: true });
      } else if (endpoint === 'report') {
        this.setState({ isReported: true });
      }
      this.props.question.question_helpfulness += 1;
    }

  }

  toggleAddAnswer() {
    this.setState({ isAddAnswerVisible: !this.state.isAddAnswerVisible });
  }

  render() {
    // Incase this prop is empty render nothing onscreen
    // Create aliases
    let question = !this.props.question ? '' : this.props.question;
    let answers = this.state.answers;
    // if there are no answers return an empty array, else return max 2 answers
    if (!answers.length) {
      answers = [];
    } else if (this.props.getMoreAnswers && this.state.answers.length < 2) {
      this.getAnswers(1, this.state.answers.length);
    } else if (!this.props.getMoreAnswers && this.state.answers.length > 2) {
      answers = this.state.answers.slice(0, 2);
    }

    // render a question
    return (
      <QuestionWrapper>
        <QuestionSummary>Q: {question.question_body}</QuestionSummary>
        <QuestionLinks>
          <HelpfulLink
            onClick={() => this.handleHelpfulOrReport('report')}
            underline={this.state.isReported ? 'none' : 'underline'}>
            {!this.state.isReported ? 'Report' : 'Reported!'}
          </HelpfulLink> | <Helpful>Helpful?</Helpful> <HelpfulLink underline={this.state.isReported ? 'none' : 'underline'} onClick={() => this.handleHelpfulOrReport('helpful')}>Yes({question.question_helpfulness})</HelpfulLink> | <HelpfulYes onClick={this.toggleAddAnswer}>Add Answer</HelpfulYes></QuestionLinks>
        {answers.map((answer) => (
          <Answer
            markOrReport={this.props.markOrReport}
            getAnswers={this.getAnswers}
            numAnswers={this.state.answers.length}
            answer={answer}
            key={answer.answer_id} />)
        )}
        <AddAnswer
          toggle={this.state.isAddAnswerVisible}
          handleClick={this.toggleAddAnswer}
          question={ {body: question.question_body, id: question.question_id} }
          product={this.props.product} />
      </QuestionWrapper>
    );
  }
}
//Moving AddAnswerForm to maintenance

// each question should be an object
Question.propTypes = {
  question: PropTypes.object,
  getMoreAnswers: PropTypes.bool.isRequired,
  markOrReport: PropTypes.func.isRequired,
  product: PropTypes.object
};

// style the components
const QuestionWrapper = styled(Tile)`
  grid-area: styled-question;
  grid-row: span 1;
  display: inline-grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: auto;
  grid-auto-columns: 100%;
  grid-auto-flow: column;
  grid-template-areas:
    "question links"
    "answer-wrapper ."
    "addAnswer .";

    margin-top: 0.7rem;
    padding-left: 1.2rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    padding-right: 1.2rem;
`;

const QuestionSummary = styled.span`
  grid-area: question;
  font-size: 1.05em;
  font-weight: bold;
  margin-top: -0.3rem;
  margin-bottom: -0.3rem;
`;

const QuestionLinks = styled.span`
  grid-area: links;
  justify-self: end;
`;

// first row is two columns
// second row is one column
// third row is one column
// deleted my branch on accident

export default Question;
