import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


class CarouselWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4, 5]
    };
  }


  render() {
    return (
      <Container>
        {this.props.render(this.props.data)}
      </Container>
    );
  }

}

CarouselWrapper.propTypes = {
  data: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired
};

const Container = styled.div`
  border: 1px solid black;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default CarouselWrapper;
