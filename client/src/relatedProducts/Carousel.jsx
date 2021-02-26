import React from 'react';
import styled from 'styled-components';
import StyledSlide from './Slide.jsx';



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
      <StyledSlide> </StyledSlide>
      <StyledSlide> </StyledSlide>
      <StyledSlide> </StyledSlide>
      <StyledSlide> </StyledSlide>
    </Container>
  );
};

export default Carousel;
