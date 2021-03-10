import React from 'react';
import PropTypes from 'prop-types';
import ImageList from './ImageList';
import { PhotoArray } from '../../types';
// import styled from 'styled-components';
import { ArrowButtonLeft, ArrowButtonRight } from './ArrowButtons';

const Carousel = (props) => {
  if (!props.photos) {
    return null;
  }

  const showLeftArrow = props.imageIndex > 0;
  const showRightArrow = props.imageIndex < (props.photos.length - 1);

  return (
    <React.Fragment>
      <ImageList photos={props.photos}
        displayWidth={props.containerWidth}
        imageIndex={props.imageIndex} />
      {props.children}
      <ArrowButtonLeft
        show={showLeftArrow}
        onClick={props.previousImage}>
        &lt;
      </ArrowButtonLeft>
      <ArrowButtonRight
        show={showRightArrow}
        onClick={props.nextImage}>
        &gt;
      </ArrowButtonRight>
    </React.Fragment>
  );
};

Carousel.propTypes = {
  children: PropTypes.element,
  photos: PhotoArray,
  containerWidth: PropTypes.number,
  containerHeight: PropTypes.number,
  imageIndex: PropTypes.number,
  setImageIndex: PropTypes.func,
  nextImage: PropTypes.func,
  previousImage: PropTypes.func
};

export default Carousel;