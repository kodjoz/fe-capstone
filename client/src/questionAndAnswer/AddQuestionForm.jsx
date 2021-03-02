import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {},
    };

    this.submitQuestion = this.submitQuestion.bind(this);
  }

  handleQuestionInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      form: {
        [name]: value
      }
    });
  }

  submitQuestion(e) {
    e.preventDefault();
    return axios.post('/api/qa/question', {
      data: this.state.form
    })
      .then(() => {
        this.setState({
          form: {}
        });
      });
  }

  render() {
    return (
      <AddQuestionForm onSubmit={this.submitQuestion}>
        <label>Nickname:
          <input type="text" required
            name="name"
            maxLength="60"
            placeholder="Enter your name"
            onChange={(e) => this.handleQuestionInput(e)}
          /></label>
        <br />
        <label>Email:
          <input
            type="email" required
            name="email"
            maxLength="60"
            placeholder="Enter your email"
            onChange={(e) => this.handleQuestionInput(e)}
          />
        </label>
        <br />
        <label>Question:
          <textarea
            type="text" required
            name="body"
            maxLength="1000"
            cols="50"
            rows="4"
            placeholder="Add your question"
            onChange={(e) => this.handleQuestionInput(e)}
          />
        </label>
        <br />
        <input
          type="submit"
          name="Submit"
          value="Submit"
        />
      </AddQuestionForm>
    );
  }
}

const AddQuestionForm = styled.form`
  grid-area: addQuestion;
  grid-row: span 1;
`;

AddQuestion.propTypes = {
  product: PropTypes.number.isRequired
};

export default AddQuestion;