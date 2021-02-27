import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Question from './Question';
import SearchQuestion from './SearchQuestion';

class QuestionModule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      searchTerm: '',
      loadMoreAnswers: false,
    };

    this.searchQuestions = this.searchQuestions.bind(this);
    this.loadAnswers = this.loadAnswers.bind(this);
  }

  getQuestions() {
    axios.get('/api/qa/questions', {
      params: {
        product_id: this.props.product_id,
        page: 1,
        count: 4
      }
    })
      .then(({ data }) => {

        // sort the questions by question_helpfulness
        data.results.sort((a, b) => {
          return b.question_helpfulness - a.question_helpfulness;
        });

        this.setState({
          questions: data.results
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.getQuestions();
  }

  // type in a term and update the state
  searchQuestions(e) {
    // console.log(e.target.value);
    this.setState({
      searchTerm: e.target.value
    });
  }
  // if the user wants to load more answers click on the button and update the state
  loadAnswers() {
    this.setState({
      loadMoreAnswers: !this.state.loadMoreAnswers
    });
  }

  render() {
    let questions = this.state.questions;
    // if there are no questions pass in an empty array, else if there are more than four questions only pass the first four
    if (!questions.length) {
      questions = [];
    } else if (questions.length > 4 && this.state.loadMoreAnswers === false) {
      questions = this.state.questions.slice(0, 4);
    }
    // render our module
    return (
      <div>
        <h3>Questions & Answers</h3>
        <SearchQuestion onChange={this.searchQuestions} value={this.state.searchTerm}/>
        {questions.map((question) => (<Question question={question} key={question.question_id} loadMoreAnswers={this.state.loadMoreAnswers} />))}
        <a onClick={this.loadAnswers}>Load More Answers</a>
      </div>
    );
  }
}
// the product id should be a number
QuestionModule.propTypes = {
  product_id: PropTypes.number
};

export default QuestionModule;
