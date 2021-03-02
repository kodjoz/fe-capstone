import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      body: ''
    };

    this.submitQuestion = this.submitQuestion.bind(this);
  }

  submitQuestion() {
    if (this.state.name === '' || this.state.email === '' || this.state.body === '') {
      alert('You forgot to fill out a part of this form. Fill out the entire form before submitting');
    } else {
      return axios.post('/api/qa/question', {
        data: {
          name: this.state.name,
          email: this.state.email,
          body: this.state.body,
          product_id: this.props.product_id
        }
      })
        .then(() => {
          this.setState({
            name: '',
            email: '',
            body: '',
          });
        });
    }
  }

  render() {
    return (
      <AddQuestionForm>
        <input type="text" required
          name="name"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}/><br />
        <input
          type="text" required
          name="email"
          placeholder="Enter your email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}/><br />
        <textarea
          type="text" required
          name="body"
          placeholder="Add your question"
          value={this.state.body}
          onChange={(e) => this.setState({ body: e.target.value })}>
        </textarea><br />
        <input
          type="submit"
          name="Submit"
          value="Submit"
          onClick={this.submitQuestion}/>
      </AddQuestionForm>
    );
  }
}

const AddQuestionForm = styled.form`
  grid-area: addQuestion;
  grid-row: span 1;
`;

AddQuestion.propTypes = {
  product_id: PropTypes.number.isRequired
};

export default AddQuestion;