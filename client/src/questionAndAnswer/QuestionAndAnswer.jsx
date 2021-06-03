import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Question from './Question';
import SearchQuestion from './SearchQuestion';
import AddQuestion from './AddQuestionForm';
import { Button, ClickableText } from '../globalStyles.js';

const QuestionAndAnswer = (props) => {
  const [questions, setQuestions] = useState([]);
  const [questionResults, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  //const [getMoreQuestions, setMoreQuestions] = useState(false);
  const [getMoreAnswers, setMoreAnswers] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const getQuestions = (page, count) => {
    if (props.product_id) {
      return axios.get('/api/qa/questions', {
        params: {
          product_id: props.product_id,
          page: page,
          count: count
        }
      })
        .then(({ data }) => {
          // sort the questions by question_helpfulness
          data.results.sort((a, b) => {
            return b.question_helpfulness - a.question_helpfulness;
          });

          if (!questions) {
            setQuestions({
              questions: data.results,
            });
          } else {
            setQuestions({ questions: data.results });
            setResults(
              data.results.slice(0, questionResults.length)
            );
          }
        })
        .catch((err) => { console.error(err); });
    } else {
      return '';
    }
  };

  const searchQuestions = e => {
    let searchResults = [];
    setSearchTerm(e.target.value.toLowerCase());

    if (searchTerm.length > 2) {
      questions.forEach((question) => {
        // if the question contains the search term add to question results
        let lowerCaseQuestion = question.question_body.toLowerCase();
        if (lowerCaseQuestion.includes(searchTerm)) {
          searchResults.push(question);
        }
      });
      setResults(searchResults);
    } else {
      setResults(questions.slice(0, 4));
    }
  };

  const getMoreQuestions = () => {
    if (questions.length >= 4) {
      getQuestions(1, 999)
        .then(() => {
          let currentLength = questionResults.length;
          let totalLength = questions.length;

          if (currentLength < totalLength) {
            setResults(questions.slice(0, currentLength + 2));
          }
        })
        .catch((err) => { console.error('There was an error getting more questions when you clicked "More Answered Questions"', err); });
    }
  };

  const toggleMoreAnswers = () => {
    setMoreAnswers(!getMoreAnswers);
  };

  const markOrReport = (endpoint, id, handler) => {
    // set helpfulness or report question or answer to this endpoint
    return axios.put(`/api/qa/${endpoint}/${id}/${handler}`)
      .catch((err) => {
        console.error(`Error when clicking ${endpoint} as ${handler}`, err);
      });
  };

  const toggleAddQuestion = () => {
    setVisible(!isVisible);
    getQuestions(1, questions.length);
  };

  useEffect(() => {
    getQuestions(1, 5)
      .then(() => {
        setResults(questions.slice(0, 4));
      });
  }, []);

  useEffect(() => {
    getQuestions(1, 5)
      .then(() => setResults(questions.slice(0, 4)));
  }, [props.product_id]);

  return (
    <QuestionContainer>
      <QuestionHeader>Questions & Answers</QuestionHeader>
      <SearchQuestion
        onChange={searchQuestions}
        value={searchTerm}/>
      <QuestionList
        loadAnswers={getMoreAnswers ? true : false}
        loadQuestions={getMoreQuestions}
        listHeight={getMoreQuestions ? '50vh' : 'initial'}>
        {questionResults.map((question) => (<Question
          key={question.question_id}
          markOrReport={markOrReport}
          getQuestions={getQuestions}
          numQuestions={questions.length}
          getMoreAnswers={toggleMoreAnswers}
          question={question}
          product={props.product} />))}
      </QuestionList>
      <MoreAnswers onClick={toggleMoreAnswers}>
        {getMoreAnswers ? 'Collapse Answers' : 'See More Answers'}</MoreAnswers>
      <MoreInfo>
        <MoreQuestionsButton
          onClick={getMoreQuestions}
          display={questions.length === questionResults.length ? 'none' : 'auto'}
        >More Answered Questions</MoreQuestionsButton>
        <Button onClick={toggleAddQuestion}>Add A Question</Button>
      </MoreInfo>
      <AddQuestion
        product={props.product}
        handleClick={toggleAddQuestion}
        toggle={isVisible}
      />
    </QuestionContainer>
  );
};

// class QuestionAndAnswer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       questions: [],
//       questionResults: [],
//       searchTerm: '',
//       getMoreQuestions: false,
//       getMoreAnswers: false,
//       isAddQuestionVisible: false,
//     };

//     this.getQuestions = this.getQuestions.bind(this);
//     this.searchQuestions = this.searchQuestions.bind(this);
//     this.getMoreAnswers = this.getMoreAnswers.bind(this);
//     this.getMoreQuestions = this.getMoreQuestions.bind(this);
//     this.markOrReport = this.markOrReport.bind(this);
//     this.toggleAddQuestion = this.toggleAddQuestion.bind(this);
//   }

//   getQuestions(page, count) {
//     if (this.props.product_id) {
//       return axios.get('/api/qa/questions', {
//         params: {
//           product_id: this.props.product_id,
//           page: page,
//           count: count
//         }
//       })
//         .then(({ data }) => {
//           // sort the questions by question_helpfulness
//           data.results.sort((a, b) => {
//             return b.question_helpfulness - a.question_helpfulness;
//           });

//           if (!this.state.questions) {
//             this.setState({
//               questions: data.results,
//             });
//           } else {
//             this.setState({
//               questions: data.results,
//               questionResults: data.results.slice(0, this.state.questionResults.length)
//             });
//           }
//         })
//         .catch((err) => { console.error(err); });
//     } else {
//       return '';
//     }
//   }

//   // componentDidMount() {
//   //   // needs to be 5 or the 'More Answered Questions' button disappears
//   //   this.getQuestions(1, 5)
//   //     .then(() => {
//   //       this.setState({ questionResults: this.state.questions.slice(0, 4) });
//   //     });
//   // }

//   // componentDidUpdate(prevProps) {
//   //   if (this.props.product_id !== prevProps.product_id) {
//   //     this.getQuestions(1, 5)
//   //       .then(() => this.setState({ questionResults: this.state.questions.slice(0, 4) }));
//   //   }
//   // }

//   // type in a term and update the state
//   // searchQuestions(e) {
//   //   this.setState({
//   //     searchTerm: e.target.value.toLowerCase(),
//   //   });

//   //   let searchResults = [];

//   //   if (this.state.searchTerm.length > 2) {
//   //     this.state.questions.forEach((question) => {
//   //       // if the question contains the search term add to question results
//   //       let lowerCaseQuestion = question.question_body.toLowerCase();
//   //       if (lowerCaseQuestion.includes(this.state.searchTerm)) {
//   //         searchResults.push(question);
//   //       }
//   //     });
//   //     this.setState({ questionResults: searchResults });
//   //   } else {
//   //     this.setState({ questionResults: this.state.questions.slice(0, 4)} );
//   //   }
//   // }

// getMoreQuestions() {
//   if (this.state.questions.length >= 4) {
//     this.getQuestions(1, 999)
//       .then(() => {
//         let currentLength = this.state.questionResults.length;
//         let totalLength = this.state.questions.length;

//         if (currentLength < totalLength) {
//           this.setState({ questionResults: this.state.questions.slice(0, currentLength + 2)} );
//         }
//       })
//       .catch((err) => { console.error('There was an error getting more questions when you clicked "More Answered Questions"', err); });
//   }
// }
// if the user wants to load more answers click on the button and update the state
// getMoreAnswers() {
//   // passes this down as a prop to the Question component, API call is made from question component
//   this.setState({ getMoreAnswers: !this.state.getMoreAnswers });
// }

// markOrReport(endpoint, id, handler) {
//   // set helpfulness or report question or answer to this endpoint
//   return axios.put(`/api/qa/${endpoint}/${id}/${handler}`)
//     .catch((err) => {
//       console.error(`Error when clicking ${endpoint} as ${handler}`, err);
//     });
// }

// toggleAddQuestion() {
//   this.setState({ isAddQuestionVisible: !this.state.isAddQuestionVisible });
//   this.getQuestions(1, this.state.questions.length);
// }

//   render() {
//     // control for loading the page
//     var questions = !this.state.questionResults ? '' : this.state.questionResults;

//     // render our module
//     return (
//       <QuestionContainer>
//         <QuestionHeader>Questions & Answers</QuestionHeader>
//         <SearchQuestion
//           onChange={this.searchQuestions}
//           value={this.state.searchTerm}/>
//         <QuestionList
//           loadAnswers={this.state.getMoreAnswers ? true : false}
//           loadQuestions={this.state.getMoreQuestions}
//           listHeight={this.state.getMoreQuestions ? '50vh' : 'initial'}>
//           {questions.map((question) => (<Question
//             key={question.question_id}
//             markOrReport={this.markOrReport}
//             getQuestions={this.getQuestions}
//             numQuestions={questions.length}
//             getMoreAnswers={this.state.getMoreAnswers}
//             question={question}
//             product={this.props.product} />))}
//         </QuestionList>
//         <MoreAnswers onClick={this.getMoreAnswers}>
//           {this.state.getMoreAnswers ? 'Collapse Answers' : 'See More Answers'}</MoreAnswers>
//         <MoreInfo>
//           <MoreQuestionsButton
//             onClick={this.getMoreQuestions}
//             display={this.state.questions.length === this.state.questionResults.length ? 'none' : 'auto'}
//           >More Answered Questions</MoreQuestionsButton>
//           <Button onClick={this.toggleAddQuestion}>Add A Question</Button>
//         </MoreInfo>
//         <AddQuestion
//           product={this.props.product}
//           handleClick={this.toggleAddQuestion}
//           toggle={this.state.isAddQuestionVisible}
//         />
//       </QuestionContainer>
//     );
//   }
// };

// style the question module
const QuestionContainer = styled.main`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-auto-columns: 100%;
  grid-auto-flow: column;
  grid-template-areas:
    "question-header"
    "search-question"
    "question-list"
    "more-answers"
    "styledButtons";
`;

const QuestionHeader = styled.h1`
  grid-area: question-header;
  grid-row: span 1;
`;

const QuestionList = styled.section`
  grid-area: question-list;
  display: inline-grid;
  grid-row: span 1;
  overflow: auto;
  max-height: 50vh;
  grid-template-areas:
    "styled-question";

`;

const MoreAnswers = styled(ClickableText)`
  grid-area: more-answers;
  grid-row: span 1;
  font-weight bold;
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin-top: 0.7rem;
  padding: 0.7rem 1.2rem 0.7rem 0;

`;

const MoreQuestionsButton = styled(Button)`
  display: ${props => props.display};
  margin-right: 0.7rem;
`;

const MoreInfo = styled.section`
  grid-area: styledButtons;
  grid-row: span 1;
`;

// the product id should be a number
QuestionAndAnswer.propTypes = {
  product_id: PropTypes.number,
  product: PropTypes.object
};
// deleted my branch on accident
export default QuestionAndAnswer;
