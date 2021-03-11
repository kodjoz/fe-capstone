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

  const previousImage = () => {
    props.walkImage(false);
  };

  const nextImage = () => {
    props.walkImage(true);
  };

  return (
    <React.Fragment>
      <ImageList photos={props.photos}
        onImageClick={props.onImageClick}
        cursor={props.cursor}
        displayWidth={props.dimensions.width}
        imageIndex={props.imageIndex} />
      {props.children}
      <ArrowButtonLeft
        show={showLeftArrow}
        onClick={previousImage}>
        &lt;
      </ArrowButtonLeft>
      <ArrowButtonRight
        show={showRightArrow}
        onClick={nextImage}>
        &gt;
      </ArrowButtonRight>
    </React.Fragment>
  );
};

Carousel.propTypes = {
  children: PropTypes.element,
  photos: PhotoArray,
  dimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  imageIndex: PropTypes.number,
  setImageIndex: PropTypes.func,
  walkImage: PropTypes.func,
  cursor: PropTypes.string,
  onImageClick: PropTypes.func
};

export default Carousel;