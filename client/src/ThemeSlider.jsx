import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

class ThemeSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick();
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    return (
      <SlideWrapper>
        <FontAwesomeIcon icon={faSun} size='lg' color="orange" />
        <Switch htmlFor="toggleTheme">
          <Slide id="toggleTheme" type="checkbox" onClick={this.handleClick}></Slide>
          <Slider slideClicked={this.state.isClicked}></Slider>
        </Switch>
        <FontAwesomeIcon icon={faMoon} size='lg' color={this.state.isClicked ? 'white' : 'darkblue'}/>
      </SlideWrapper>
    );
  }
}

const SlideWrapper = styled.span`
  margin-top: 2px;
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  align-self: flex-end;
`;

// box surrounding the actual slider
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 5px;
  margin-right: 5px;

`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.slideClicked ? '#2196F3' : '#CCC'};
  box-shadow: ${props => props.slideClicked ? '0 0 1px #2196F3' : ''};
  border-radius: 34px;
  -webkit-transition: .4s;
  transition: .4s;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    -webkit-transition: .4s;
    transition: .4s;
  }
`;

// Needs the attribute type=checkbox in the JSX or it won't work
const Slide = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;



ThemeSlider.propTypes = {
  handleClick: PropTypes.func,
};

export default ThemeSlider;