import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class CarouselWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.checkScroll = this.checkScroll.bind(this);
    this.state = {
      showLeftScroll: false,
      showRightScroll: true,
      scrollWidth: 0
    };

    this.ref = React.createRef();
  }

  checkScroll() {
    if (this.ref.current.scrollWidth <= this.ref.current.clientWidth) {
      this.setState({
        showLeftScroll: false,
        showRightScroll: false,
      });
      return;
    }
    if (this.ref.current.scrollLeft === 0) {
      this.setState({
        showLeftScroll: false,
        showRightScroll: true
      });
      return;
    }
    if (this.ref.current.scrollLeft + this.ref.current.clientWidth >= this.ref.current.scrollWidth) {
      this.setState({
        showRightScroll: false,
        showLeftScroll: true,
      });
      return;
    }
    this.setState({
      showRightScroll: true,
      showLeftScroll: true,
    });
  }

  scrollRight() {
    this.ref.current.scrollLeft += this.ref.current.firstChild.clientWidth;
    this.checkScroll();
  }

  scrollLeft() {
    this.ref.current.scrollLeft -= this.ref.current.firstChild.clientWidth;
    this.checkScroll();
  }

  componentDidMount() {
    if (this.ref.current.children.length < 4) {
      this.setState({
        showLeftScroll: false,
        showRightScroll: false
      });
    }
  }

  render() {
    return (
      <StyledCarouselWrapper
        onMouseEnter={this.checkScroll}>
        <Label>
          <h3>{this.props.name}</h3>
        </Label>
        <CarouselContainer
          id={this.props.name + 'Container'}
          ref={this.ref}>
          {this.props.render(this.props.data)}
        </CarouselContainer>
        <LeftCarouselButton show={this.state.showLeftScroll}
          onClick={this.scrollLeft}>{'<'}</LeftCarouselButton>
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

const Label = styled.div`
  width: 15rem;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: -30px;
  background-color: ${props => props.theme.primary};

  h3 {
    color: ${props => props.theme.topLayer};
    transform-origin: 0 0;
    transform: rotate(270deg);
    bottom: 0;
    position: absolute;
    left: 0;
    width: 350px;
    margin-left: 4px;
  }
`;


const StyledCarouselWrapper = styled.div`
  border-radius: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4em;
  position: relative;
`;
const CarouselContainer = styled.div`
  border-radius: 0px;
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
  background: ${props => props.theme.midLayer};
  color: ${props => props.theme.secondaryText};
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  border-radius: 0px;
  border: none;
  padding: 0.5rem;
  position: absolute;
  height: 100%;
  width: 5%;
  z-index: 1;
  opacity: 0.8;
  font-size: 3rem;

  &:hover {
    background: ${props => props.theme.midLight};
    opacity: 1;
  }

`;

const LeftCarouselButton = styled(CarouselButton)`
  left: 0%;
`;

const RightCarouselButton = styled(CarouselButton)`
  right: 0%;
`;


export default CarouselWrapper;
