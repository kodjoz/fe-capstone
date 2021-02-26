import React from 'react';
import AddToCart from './AddToCart';
import ImageGallery from './ImageGallery';
import ProductDescription from './ProductDescription';
import ProductDetail from './ProductDetail';
import StyleSelector from './StyleSelector';
import styled from 'styled-components';

const OverviewContainer = () => {

  const Grid = styled.div`
    border: 1px solid #ddd;
    display: grid;
    grid-column-gap: 1rem;
  `;

  const LeftContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
  `;

  const RightContainer = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
  `;

  return (
    <Grid>
      <LeftContainer>
        <ImageGallery />
      </LeftContainer>
      <RightContainer>
        <ProductDetail />
        <StyleSelector />
        <AddToCart />
      </RightContainer>
      <ProductDescription />
    </Grid>
  );
};

export default OverviewContainer;