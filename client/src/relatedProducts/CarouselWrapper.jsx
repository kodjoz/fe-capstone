import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class CarouselWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.state = {
      showLeftScroll: true,
      showRightScroll: true,
      scrollWidth: 0
    };
  }

  scrollRight() {
    this.container.scrollLeft += 200;
    if (this.container.scrollWidth <= this.container.clientWidth) {
      this.setState({
        showLeftScroll: false,
        showRightScroll: false,
      });
      return;
    }
    if (this.container.scrollLeft + this.container.clientWidth >= this.container.scrollWidth) {
      this.setState({
        showRightScroll: false,
        showLeftScroll: true,
      });
    } else {
      this.setState({
        showLeftScroll: true,
      });
    }
  }

  scrollLeft() {
    this.container.scrollLeft -= 200;
    if (this.container.scrollWidth <= this.container.clientWidth) {
      this.setState({
        showLeftScroll: false,
        showRightScroll: false,
      });
      return;
    }
    if (this.container.scrollLeft === 0) {
      this.setState({
        showRightScroll: true,
        showLeftScroll: false
      });
    } else {
      this.setState({
        showRightScroll: true,
      });
    }
  }

  componentDidMount() {
    this.container = document.getElementById(this.props.name + 'Container');
    if (this.props.name === 'yourOutfit') {
      this.setState({
        showLeftScroll: false
      });
      return;
    }
  }

  render() {
    if (document.getElementById(this.props.name + 'Container')) {
      this.container = document.getElementById(this.props.name + 'Container');
    }
    return (
      <StyledCarouselWrapper>
        <LeftCarouselButton show={this.state.showLeftScroll}
          onClick={this.scrollLeft}>{'<'}</LeftCarouselButton>
        <CarouselContainer id={this.props.name + 'Container'}>
          {this.props.render(this.props.data)}
        </CarouselContainer>
        <RightCarouselButton show={this.state.showRightScroll}
          onClick={this.scrollRight}>{'>'}</RightCarouselButton>
      </StyledCarouselWrapper>
    );
  }

}

CarouselWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired,
};

const StyledCarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4em;
  position: relative;

`;
const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 10px;
  background-color: ${props => props.theme.midLayer}
`;

const CarouselButton = styled.button`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  cursor: pointer;
  top: 50%;
  z-index: 1;
  transition: transform 0.1s ease-in-out;
  background: white;
  border-radius: 15px;
  border: none;
  padding: 0.5rem;

  &hover {
    background: ${props => props.theme.midLayer}
  }

`;

const LeftCarouselButton = styled(CarouselButton)`
  left: -2%;
`;

const RightCarouselButton = styled(CarouselButton)`
  right: -2%;

`;


export default CarouselWrapper;
