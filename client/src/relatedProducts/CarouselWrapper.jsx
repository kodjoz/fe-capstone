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
    console.log(this.ref.current.attributes.id, this.ref.current.children.length);
    console.log(this.ref.current.attributes.id, this.ref.current.clientWidth);
    console.log(this.ref.current.attributes.id, this.ref.current.scrollWidth);
  }

  render() {
    if (this.ref.current) {
      console.log(this.ref.current.attributes.id, 'children', this.ref.current.children.length);
    }
    return (
      <StyledCarouselWrapper
        onMouseEnter={this.checkScroll}>
        <LeftCarouselButton show={this.state.showLeftScroll}
          onClick={this.scrollLeft}>{'<'}</LeftCarouselButton>
        <CarouselContainer
          id={this.props.name + 'Container'}
          ref={this.ref}>
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
  width: 80%;
`;
const CarouselContainer = styled.div`
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
  cursor: pointer;
  top: 50%;
  z-index: 1;
  transition: transform 0.1s ease-in-out;
  background: ${props => props.theme.topLayer}
  border-radius: 15px;
  border: none;
  padding: 0.5rem;

  &:hover {
    background: ${props => props.theme.midLight};
    color: ${props => props.theme.primaryText};
  }

`;

const LeftCarouselButton = styled(CarouselButton)`
  left: -2%;
`;

const RightCarouselButton = styled(CarouselButton)`
  right: -2%;

`;


export default CarouselWrapper;
