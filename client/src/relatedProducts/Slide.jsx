import React, { Component } from 'react';
import StyledSlideInfo from './SlideInfo.jsx';
import styled from 'styled-components';


class Slide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className={this.props.className}>
      <StyledSlideInfo></StyledSlideInfo>
    </div>
    );
  }
}

const StyledSlide = styled(Slide)`
  width: 150px;
  height: 200px;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default StyledSlide;
