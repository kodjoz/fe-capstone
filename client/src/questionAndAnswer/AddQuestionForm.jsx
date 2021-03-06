import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../globalStyles.js';


class AddQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      body: '',
      email: ''
    };

    this.submitQuestion = this.submitQuestion.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
  }

  updateQuestion(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  submitQuestion(e) {
    e.preventDefault();
    return axios.post('/api/qa/questions', {
      name: this.state.name,
      body: this.state.body,
      email: this.state.email,
      product_id: this.props.product
    })
      .then(() => {
        this.setState({
          name: '',
          body: '',
          email: ''
        });
      })
      .then(() => {
        this.props.handleClick();
      });
  }

  render() {
    let showModal = this.props.toggle ? 'block' : 'none';
    let product = this.props.product ? this.props.product.name : null;

    return (
      <QuestionModal display={showModal}>
        <AddQuestionForm onSubmit={this.submitQuestion}>
          <Title>Ask Your Question</Title>
          <CurrentProduct>About {product}</CurrentProduct>
          <Name>What is your nickname?:<br />
            <FormInput
              type="text" required
              name="name"
              maxLength="60"
              placeholder="Example: jackson11!"
              onChange={this.updateQuestion}
            />
            <span>For privacy reasons, do not use your full name or email address</span>
          </Name>
          <br />
          <Email>Your email:
            <FormInput
              type="email" required
              name="email"
              maxLength="60"
              placeholder="Enter your email"
              onChange={this.updateQuestion}
            />
            <span>For authentication reasons, you will not be emailed</span>
          </Email>
          <br />
          <BodyLabel>Question:
            <textarea
              type="text" required
              name="body"
              maxLength="1000"
              cols="50"
              rows="4"
              placeholder="Add your question"
              onChange={this.updateQuestion}
            />
          </BodyLabel>
          <SubmitAnswer>
            <Button
              onClick={this.submitQuestion}>Submit</Button>
            <Button
              onClick={this.props.handleClick}
            >Back</Button>
          </SubmitAnswer>
        </AddQuestionForm>
      </QuestionModal>
    );
  }
}

const QuestionModal = styled.main.attrs(props => ({
  display: props.display || 'none',
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => props.display};
`;

const AddQuestionForm = styled.form`
  position: fixed;
  background: white;
  width: 50%;
  height: auto;
  top: 50%
  position: fixed;
  background: white;
  width: 50%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 15px solid hsl(0, 15%, 99%);
  border-radius: 7px;
  margin-left: 5px;
  margin-right: 5px;

  display: grid;
  row-gap: 7px;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-auto-flow: column;
  grid-template-areas:
    "title"
    "subtitle"
    "name-input"
    "email-input"
    "body-input"
    "submit-question";
`;

const Title = styled.h1`
  grid-area: title;
  grid-row: span 1;
`;

const CurrentProduct = styled.h2`
  grid-area: subtitle;
  grid-row: span 1;
  font-weight: bold;
`;

const Name = styled.label`
  grid-area: name-input;
  grid-row: span 1;
`;

const Email = styled.label`
  grid-area: email-input;
  grid-row: span 1;
`;

const BodyLabel = styled.label`
  grid-area: body-input;
  grid-row: span 1;
`;

const FormInput = styled.input`
  grid-row: span 1;
  width: 90%;
  padding: 10px 15px;
  margin: 8px 0;
`;

const SubmitAnswer = styled.section`
  grid-area: submit-question;
  grid-row: span 1;
`;

AddQuestion.propTypes = {
  product: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};

export default AddQuestion;
