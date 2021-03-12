import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import { PhotoArray } from '../../types';
import styled from 'styled-components';

const ImageFrame = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  overflow: hidden;
`;

const ImageList = (props) => {

  const images = props.photos.map((photo) => {
    // const offset = index * props.displayWidth;
    const offset = props.imageIndex * props.displayWidth;
    return (
      <Image key={photo.url}
        onImageClick={props.onImageClick}
        photo={photo}
        cursor={props.cursor}
        offset={offset} />
    );
  });
  return (
    <ImageFrame>
      {images}
    </ImageFrame>
  );
};

ImageList.propTypes = {
  photos: PhotoArray,
  displayWidth: PropTypes.number,
  imageIndex: PropTypes.number,
  cursor: PropTypes.string,
  onImageClick: PropTypes.func
};

export default ImageList;
