import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product_id: 19089,
      questions: [],
      answers: [],
    }
  }

  // get questions
  getQuestions() {
    axios.get('/api/qa/questions', {
      params: {
        product_id: this.state.product_id,
        page: 1,
        count: 4
      }
    })
    .then(({ data }) => {
      this.setState({
        questions: data.results
      })
    })
    .catch((err) => {
      console.error(err);
    });
  }
  // run componentDidMount with getQuestions
  componentDidMount() {
    this.getQuestions();
  }


  render() {
    // only return two questions to start
    let questions = this.state.questions.slice(0, 4);

    let formattedQuestions = questions.map((question) => {
      let prettyDate = new Date(question.question_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      return (<div key={question.question_id}>
        <div>
          <p>Q: {question.question_body}</p>
        </div>
        <div>
          <p>by {question.asker_name} | {prettyDate} | Helpful yes?/no? | Report</p>
        </div>
      </div>)
    });

    const QuestionBox = styled.div`
      margin: 0 1em;
      padding: 0.25em 1em;
      color: black;
      border: 1px solid #6e6e6e;
    `;

    return (
      <QuestionBox>
        <h3>Questions & Answers</h3>
        {formattedQuestions}
      </QuestionBox>
    )
  }
}

export default QuestionList;
