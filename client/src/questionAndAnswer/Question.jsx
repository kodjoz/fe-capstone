import React from 'react';
import PropTypes from 'prop-types';
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
      <div className="question">
        <div>
          <div><p><strong>Q: {question.question_body}</strong></p>Helpful? Yes({question.question_helpfulness}) | Add Answer</div>
          {answers.map((answer) => (<Answer answer={answer} key={answer.id} />) )}
        </div>
      </div>
    );
  }
}
// each question should be an object
Question.propTypes = {
  question: PropTypes.object.isRequired,
  loadMoreAnswers: PropTypes.bool.isRequired
};

export default Question;
