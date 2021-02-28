import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class CarouselWrapper extends React.Component {
  constructor(props) {
    super(props);
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
  render: PropTypes.func.isRequired,
};

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export default CarouselWrapper;
