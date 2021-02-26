import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import SearchQuestion from './SearchQuestion';

class QuestionModule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      searchTerm: '',
    }

    this.searchQuestions = this.searchQuestions.bind(this);
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
      this.setState({
        questions: data.results
      })
    })
    .catch((err) => {
      console.error(err);
    });
  }

  // search for a term and update the state
  searchQuestions(e) {
    // console.log(e.target.value);
    this.setState({
      searchTerm: e.target.value
    });
  }

  render() {
    // styles the whole body of this section
    const Module = styled.div`
      font-family: Arial, sans-serif;
      width: 50%;
      margin: 0 1em;
      padding: 0.25em 1em;
      color: black;
      border: 1px solid #6e6e6e;
    `;

    return (
      <div>
        <h3>Questions & Answers</h3>
        <SearchQuestion onChange={this.searchQuestions} value={this.state.searchTerm}/>
      </div>
    )
  }
};

export default QuestionModule;