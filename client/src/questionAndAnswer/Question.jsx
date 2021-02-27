import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Answer from './Answer';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Incase this prop is empty render nothing onscreen
    if (this.props.question === undefined) {
      return '';
    }
    // Create aliases
    let question = this.props.question;
    let answers = Object.values(question.answers).sort((a, b) => { return b.helpfulness - a.helpfulness; });
    // if there are no answers return an empty array, else return max 2 answers
    if (!answers.length) {
      answers = [];
    } else if (answers.length > 2 && this.props.loadMoreAnswers === false) {
      answers = answers.slice(0, 2);
    }

    // render a question
    return (
      <StyledQuestion>
        <QuestionBody><strong>Q: {question.question_body}</strong></QuestionBody>
        <QuestionLinks>Helpful? Yes({question.question_helpfulness}) | Add Answer</QuestionLinks>
        {answers.map((answer) => (<Answer answer={answer} key={answer.id} />) )}
      </StyledQuestion>
    );
  }
}
//answers.map((answer) => (<Answer answer={answer} key={answer.id} />) )}
// each question should be an object
Question.propTypes = {
  question: PropTypes.object.isRequired,
  loadMoreAnswers: PropTypes.bool.isRequired
};

// style the components
const StyledQuestion = styled.div`
  grid-area: styledQuestion;
  grid-row: span 1;
  display: inline-grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: auto;
  grid-auto-columns: 100%;
  grid-auto-flow: column;
  grid-template-areas:
    "question links"
    "answerContainer .";
`;

const QuestionBody = styled.div`
  grid-area: question;
`;

const QuestionLinks = styled.div`
  grid-area: links;
  justify-self: end;
`;

// first row is two columns
// second row is one column
// third row is one column
// deleted my branch on accident

export default Question;
