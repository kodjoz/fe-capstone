import React, { useState } from 'react';
import axios from 'axios'; // trying to see if I need to import Axios here because it's already imported in parent
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tile, ModalBackground, GridLabel, FormTextInput, TextArea, Button, LowPriorityText } from '../globalStyles';

// class AddAnswer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: '',
//       body: '',
//       email: ''
//     };

//     this.updateForm = this.updateForm.bind(this);
//     this.submitAnswer = this.submitAnswer.bind(this);
//   }

//   submitAnswer(e) {
//     e.preventDefault;
//     if (!this.state.name) {
//       alert('You must enter the following: name');
//     } else if (!this.state.email) {
//       alert('You must enter the following: email');
//     } else if (!this.state.body) {
//       alert('You must enter the following: body');
//     } else {
//       return axios.post(`/api/qa/questions/${props.question.id}/answers`, {
//         name: this.state.name,
//         body: this.state.body,
//         email: this.state.email
//       })
//         .then((response) => {
//           console.log('Submission response', response.status, response.statusText);
//         })
//         .then(() => { props.handleClick(); })
//         .catch((err) => { console.error('Error while submitting an answer', err); });
//     }
//   }

//   updateForm(e) {
//     const name = e.target.name;
//     const value = e.target.value;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     let showModal = props.toggle ? 'block' : 'none';
//     let randomValue = Math.random();

//     return (
//       <AnswerModal display={showModal}>
//         <AnswerWrapper>
//           <Title>Product: {props.product ? props.product.name : ''} | Submit an Answer</Title>
//           <Subtitle>Q: {props.question.body}</Subtitle>
//           <GridLabel gridArea="name-input" htmlFor={'name' + randomValue}>What is your nickname?:<br />
//             <FormTextInput
//               type="text"
//               id={'name' + randomValue}
//               name="name"
//               maxLength="60"
//               required
//               placeholder="Example: jack543!"
//               onChange={this.updateForm}
//             /><br />
//             <LowPriorityText>For privacy reasons, do not use your full name or email</LowPriorityText>
//           </GridLabel>
//           <GridLabel gridArea="email-input" htmlFor={'email' + randomValue}>Email:<br />
//             <FormTextInput
//               type="email"
//               id={'email' + randomValue}
//               name="email"
//               maxLength="60"
//               required
//               placeholder="Example: jack@email.com"
//               onChange={this.updateForm}
//             /><br />
//             <LowPriorityText>For authentication reasons, you will not be emailed</LowPriorityText>
//           </GridLabel>
//           <GridLabel gridArea="body-text" htmlFor={'body' + randomValue}>
//             Add an Answer:<br />
//             <TextArea
//               id={'body' + randomValue}
//               name="body"
//               maxLength="1000"
//               cols="60"
//               rows="6"
//               required
//               onChange={this.updateForm}
//             />
//           </GridLabel>
//           <SubmitAnswer>
//             <FormButton
//               type="button"
//               onClick={this.submitAnswer}>Submit</FormButton>
//             <FormButton
//               onClick={props.handleClick}
//             >Back</FormButton>
//           </SubmitAnswer>
//         </AnswerWrapper>
//       </AnswerModal>
//     );
//   }
// }

const AddAnswer = (props) => {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState('');

  const handleNameInput = e => {
    setName({ name: e.target.value });
  };

  const handleBodyInput = e => {
    setBody({ body: e.target.value });
  };

  const handleEmailInput = e => {
    setEmail({ email: e.target.value });
  };

  const submitAnswer = (e) => {
    e.preventDefault;
    return axios.post(`/api/qa/questions/${props.question.id}/answers`, {
      name,
      body,
      email,
    })
      .then((response) => {
        console.log('Submission response', response.status, response.statusText);
      })
      .then(() => { props.handleClick(); })
      .catch((err) => { console.error('Error while submitting an answer', err); });
  };

  let randomValue = Math.random();
  let showModal = props.toggle ? 'block' : 'none';


  return (
    <AnswerModal display={showModal}>
      <AnswerWrapper>
        <Title>Product: {props.product ? props.product.name : ''} | Submit an Answer</Title>
        <Subtitle>Q: {props.question.body}</Subtitle>
        <GridLabel gridArea="name-input" htmlFor={'name' + randomValue}>What is your nickname?:<br />
          <FormTextInput
            type="text"
            id={'name' + randomValue}
            name="name"
            maxLength="60"
            required
            placeholder="Example: jack543!"
            value={name}
            onChange={handleNameInput}
          /><br />
          <LowPriorityText>For privacy reasons, do not use your full name or email</LowPriorityText>
        </GridLabel>
        <GridLabel gridArea="email-input" htmlFor={'email' + randomValue}>Email:<br />
          <FormTextInput
            type="email"
            id={'email' + randomValue}
            name="email"
            maxLength="60"
            required
            placeholder="Example: jack@email.com"
            value={email}
            onChange={handleEmailInput}
          /><br />
          <LowPriorityText>For authentication reasons, you will not be emailed</LowPriorityText>
        </GridLabel>
        <GridLabel gridArea="body-text" htmlFor={'body' + randomValue}>
          Add an Answer:<br />
          <TextArea
            id={'body' + randomValue}
            name="body"
            maxLength="1000"
            cols="60"
            rows="6"
            required
            value={body}
            onChange={handleBodyInput}
          />
        </GridLabel>
        <SubmitAnswer>
          <FormButton
            type="button"
            onClick={submitAnswer}>Submit</FormButton>
          <FormButton
            onClick={props.handleClick}
          >Back</FormButton>
        </SubmitAnswer>
      </AnswerWrapper>
    </AnswerModal>
  );
};

const AnswerModal = styled(ModalBackground).attrs(props => ({
  display: props.display,
}))`
  display: ${props => props.display};
`;

const AnswerWrapper = styled(Tile)`
  position: fixed;
  background: ${ ({ theme }) => theme.topLayer};
  width: 50%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left: 1.2rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;

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
    "submit-answer";
`;

const Title = styled.h1`
  grid-area: title;
  grid-row: span 1;
`;

const Subtitle = styled.h2`
  grid-area: subtitle;
  grid-row: span 1;
`;

const SubmitAnswer = styled.section`
  grid-area: submit-answer;
  grid-row: span 1;
`;

const FormButton = styled(Button)`
  margin-right: 0.7rem;
`;

AddAnswer.propTypes = {
  question: PropTypes.object.isRequired,
  toggle: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  product: PropTypes.object
};

export default AddAnswer;