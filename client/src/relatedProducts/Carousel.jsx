import React from 'react';
import styled from 'styled-components';

const Slide = styled.div`
  width: 100px;
  height: 100px;
  background-color: grey;
`;

const Container = styled.div`
width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Carousel = () => {
  return (
    <Container>
      <Slide> </Slide>
      <Slide> </Slide>
      <Slide> </Slide>
      <Slide> </Slide>
    </Container>
  );
}

export default Carousel;