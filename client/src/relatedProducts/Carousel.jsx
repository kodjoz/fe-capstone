import React from 'react';
import styled from 'styled-components';
import StyledSlide from './Slide.jsx';
import PropTypes from 'prop-types';
import StarButton from './StarButton.jsx';



const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Carousel = ({ data }) => {
  if (!data) {
    return <div></div>;
  }
  return (
    <Container>
      {Object.values(data).map((product) => {
        return <StyledSlide data={product}
          key={product.id}
          render={onClick => (
            <StarButton onClick={onClick}/>
          )}>
        </StyledSlide>;
      })}
    </Container>
  );
};

Carousel.propTypes = {
  data: PropTypes.object
};

export default Carousel;
