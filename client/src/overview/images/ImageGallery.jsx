import React from 'react';
import styled from 'styled-components';
import { StyleType } from '../types.js';
import ImageList from './ImageList';

const CarouselContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ddd;
  position: relative;
`;

const ImageGallery = (props) => {
  if (!props || !props.selectedStyle) {
    return null;
  }
  return (
    <CarouselContainer>
      <ImageList photos={props.selectedStyle.photos} />
    </CarouselContainer>
  );
};

ImageGallery.propTypes = {
  selectedStyle: StyleType
};

export default ImageGallery;
