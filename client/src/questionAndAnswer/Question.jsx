import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let question;
    if (this.props.question === undefined) {
      return '';
    } else {
      question = this.props.question;
    }

    let answers = Object.keys(question.answers).slice(0, 2);
    let formattedAnswers = answers.map((answer) => {
      let prettyDate = new Date(question.answers[answer].date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      return (
        <div className="answers" key={answer}>
          <p><strong>A:</strong> {question.answers[answer].body}</p>
          <div>
            <p>by {question.answers[answer].answerer_name} | {prettyDate} | Helpful? ({question.answers[answer].helpfulness}) | <u>Report</u></p>
          </div>
        </div>
      );
    });

    return (
      <div className="question">
        <div>
          <p><strong>Q: {question.question_body}</strong></p>
          {formattedAnswers}
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.array.isRequired
};

export default Question;