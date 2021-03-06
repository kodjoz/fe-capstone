import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Palette, ModalBackground, FormTextInput, TextArea, Button, LowPriorityText, GridLabel } from '../globalStyles.js';


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
    if (!this.state.name) {
      alert('You must enter the following: name');
    } else if (!this.state.email) {
      alert('You must enter the following: email');
    } else if (!this.state.body) {
      alert('You must enter the following: body');
    } else {
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
        })
        .catch(err => console.error('Error while submitting this question', err));
    }
  }

  render() {
    let showModal = this.props.toggle ? 'block' : 'none';
    let product = this.props.product ? this.props.product.name : null;

    return (
      <QuestionModal display={showModal}>
        <QuestionWrapper>
          <Title>Ask Your Question</Title>
          <CurrentProduct>About {product}</CurrentProduct>
          <GridLabel gridArea="name-input">What is your nickname?:<br />
            <FormTextInput
              type="text"
              required
              name="name"
              maxLength="60"
              placeholder="Example: jackson11!"
              onChange={this.updateQuestion}
            /><br />
            <LowPriorityText>For privacy reasons, do not use your full name or email address</LowPriorityText>
          </GridLabel>
          <GridLabel gridArea="email-input">Your email:<br />
            <FormTextInput
              type="email"
              required
              name="email"
              maxLength="60"
              placeholder="Why did you like this product or not?"
              onChange={this.updateQuestion}
            /><br />
            <LowPriorityText>For authentication reasons, you will not be emailed</LowPriorityText>
          </GridLabel>
          <GridLabel gridArea="body-text">Question:<br />
            <TextArea
              type="text"
              required
              name="body"
              maxLength="1000"
              cols="60"
              rows="4"
              placeholder="Add your question"
              onChange={this.updateQuestion}
            />
          </GridLabel>
          <SubmitQuestion>
            <Button
              type="button"
              onClick={this.submitQuestion}>Submit</Button>
            <Button
              type="button"
              onClick={this.props.handleClick}
            >Back</Button>
          </SubmitQuestion>
        </QuestionWrapper>
      </QuestionModal>
    );
  }
}

const QuestionModal = styled(ModalBackground).attrs(props => ({
  display: props.display,
}))`
  display: ${props => props.display};
`;

const QuestionWrapper = styled.section`
  position: fixed;
  background: ${Palette.background};
  width: 50%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 15px solid ${Palette.modalBorderWhite};
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
    "body-text"
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

const SubmitQuestion = styled.section`
  grid-area: submit-question;
  grid-row: span 1;
`;

AddQuestion.propTypes = {
  product: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};

export default AddQuestion;
