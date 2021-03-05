import React from 'react';
import axios from 'axios'; // trying to see if I need to import Axios here because it's already imported in parent
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../globalStyles';

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      body: '',
      email: ''
    };

    this.updateForm = this.updateForm.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  submitAnswer(e) {
    e.preventDefault;
    return axios.post(`/api/qa/questions/${this.props.question.id}/answers`, {
      name: this.state.name,
      body: this.state.body,
      email: this.state.email
    })
      .then((response) => {
        console.log('Submission response', response.status, response.statusText);
      })
      .then(() => { this.props.handleClick(); });
  }

  updateForm(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    let showModal = this.props.toggle ? 'block' : 'none';

    return (
      <AnswerModal display={showModal}>
        <FormWrapper>

          <Title>Product: {this.props.product ? this.props.product.name : ''} | Submit an Answer</Title>
          <CurrentQuestion>Q: {this.props.question.body}</CurrentQuestion>

          <Name>What is your nickname?:<br />
            <FormInput
              type="text"
              name="name"
              maxLength="60"
              required
              placeholder="Example: jack543!"
              onChange={this.updateForm}
            /><br />
            <span>For privacy reasons, do not use your full name or email</span>
          </Name>
          <Email>Email:<br />
            <FormInput
              type="email"
              name="email"
              maxLength="60"
              required
              placeholder="Example: jack@email.com"
              onChange={this.updateForm}
            /><br />
            <span>For authentication reasons, you will not be emailed</span>
          </Email>
          <BodyLabel>
            Add an Answer:<br />
            <FormInput
              type="text"
              name="body"
              maxLength="1000"
              required
              onChange={this.updateForm}
            />
          </BodyLabel>
          <SubmitAnswer>
            <Button
              onClick={this.submitAnswer}>Submit</Button>
            <Button
              onClick={this.props.handleClick}
            >Back</Button>
          </SubmitAnswer>
        </FormWrapper>
      </AnswerModal>
    );
  }
}

const AnswerModal = styled.main.attrs(props => ({
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

const FormWrapper = styled.section`
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
    "submit-answer";
`;

const Title = styled.h1`
  grid-area: title;
  grid-row: span 1;
`;

const CurrentQuestion = styled.h2`
  grid-area: subtitle;
  grid-row: span 1;
  font-weight: bold;
`;

const FormInput = styled.input`
  grid-row: span 1;
  width: 90%;
  padding: 10px 15px;
  margin: 8px 0;
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

const SubmitAnswer = styled.section`
  grid-area: submit-answer;
  grid-row: span 1;
`;

AddAnswer.propTypes = {
  question: PropTypes.object.isRequired,
  toggle: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  product: PropTypes.object
};

export default AddAnswer;