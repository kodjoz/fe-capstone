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

const ArrowButton = styled.button`
  border: none;
  position: absolute;
  top: 50%;
  cursor: pointer;
  font-size: 2rem;
`;

const ArrowButtonLeft = styled(ArrowButton)`
  left: 1rem;
`;

const ArrowButtonRight = styled(ArrowButton)`
  right: 1rem;
`;

const ImageGallery = (props) => {
  if (!props || !props.selectedStyle) {
    return null;
  }
  return (
    <CarouselContainer>
      <ImageList photos={props.selectedStyle.photos} />
      <ArrowButtonLeft>&lt;</ArrowButtonLeft>
      <ArrowButtonRight>&gt;</ArrowButtonRight>
    </CarouselContainer>
  );
};

ImageGallery.propTypes = {
  selectedStyle: StyleType
};

export default ImageGallery;
