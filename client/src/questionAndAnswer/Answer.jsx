import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ModalImage from '../ModalImage.jsx';
import { Gallery, Helpful, HelpfulYes } from '../globalStyles.js';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHelpful: false,
      isReported: false,
    };
  }

  handleHelpfulOrReport(endpoint) {

    if (this.state.isHelpful && endpoint === 'helpful') {
      alert('You already marked this answer as helpful!');
    } else if (this.state.isReported && endpoint === 'report') {
      alert('You already reported this answer!');
    } else {
      this.props.markOrReport('answers', this.props.answer.answer_id, endpoint);
      if (endpoint === 'helpful') {
        this.setState({ isHelpful: true });
      } else if (endpoint === 'report') {
        this.setState({ isReported: true });
      }
      this.props.answer.helpfulness += 1;
    }
  }

  render() {
    if (!this.props.answer) {
      return '';
    }

    let answer = this.props.answer;
    // Options needed to pretty-print the date
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    // pretty print the date
    let prettyDate = new Date(answer.date).toLocaleDateString('en-US', options);

    return (
      <AnswerWrapper>
        <AnswerSummary><strong>A: </strong>{answer.body}</AnswerSummary>
        <Gallery>
          {answer.photos.length !== 0 ? answer.photos.map((photo) => {
            return (
              <ModalImage src={photo.url} key={photo.id} />
            );
          }) : null}
        </Gallery>
        <AnswerLinks>by {answer.answerer_name}, <time>{prettyDate}</time> | <Helpful>Helpful? </Helpful> <HelpfulLinkPreset
          onClick={() => this.handleHelpfulOrReport('helpful')}
          underline={this.state.isHelpful ? 'none' : 'underline'}>Yes ({answer.helpfulness})</HelpfulLinkPreset> | <HelpfulLinkPreset
          onClick={() => this.handleHelpfulOrReport('report')}
          underline={this.state.isReported ? 'none' : 'underline'}>{!this.state.isReported ? 'Report' : 'Reported!'}</HelpfulLinkPreset></AnswerLinks>
      </AnswerWrapper>
    );
  }
}

// each answer should be an object

const AnswerWrapper = styled.div`
  grid-area: answer-wrapper;
  grid-row: span 1;
  margin-top: 7px;
`;

const AnswerSummary = styled.span`
  font-size: 1.05em;
  margin-right: 20%
  margin-bottom: 1rem;
`;

const AnswerLinks = styled.span`
  font-size: .8em;
`;

const HelpfulLinkPreset = styled(HelpfulYes)`
  text-decoration: ${props => props.underline};
`;

Answer.propTypes = {
  answer: PropTypes.object.isRequired,
  markOrReport: PropTypes.func.isRequired,
};
// accidentally deleted my branch
export const HelpfulLink = HelpfulLinkPreset;
export default Answer;
