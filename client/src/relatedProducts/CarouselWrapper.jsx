import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class CarouselWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
  }

  scrollRight() {
    document.getElementById(this.props.name + 'Container').scrollLeft += 50;
  }

  scrollLeft() {
    document.getElementById(this.props.name + 'Container').scrollLeft -= 50;
  }
  //render max 4 slides
  //have start idx
  //on right button click, increment index
  render() {
    return (
      <>
        <button onClick={this.scrollLeft}>{'<'}</button>
        <button onClick={this.scrollRight}>{'>'}</button>
        <Container id={this.props.name + 'Container'}>
          {this.props.render(this.props.data)}
        </Container>
      </>
    );
  }

}

CarouselWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired,
};
const Container = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 10px;
`;
export default CarouselWrapper;
