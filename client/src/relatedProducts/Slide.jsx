import React, { Component } from 'react';
import StyledSlideInfo from './SlideInfo.jsx';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.state = {
      showModal: false
    };
    this.show = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      showModal: true
    });
  }

  hideModal() {
    this.setState({
      showModal: false
    });
  }

  handleButtonClick(e) {
    e.preventDefault();
    console.log('clicked');
    this.showModal();
    this.props.cardButtonClick();
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.render(this.handleButtonClick)}
        <StyledSlideInfo data={this.props.data}></StyledSlideInfo>

      </div>
    );
  }
}

Slide.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired,
  cardButtonClick: PropTypes.func.isRequired
};

const StyledSlide = styled(Slide)`
  width: 150px;
  height: 200px;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default StyledSlide;
