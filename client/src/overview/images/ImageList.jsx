import React from 'react';
import Image from './Image';
import { PhotoArray } from '../types';
import styled from 'styled-components';

const ImageFrame = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  position: relative;
  display: flex;
`;

const ImageList = (props) => {

  const images = props.photos.map((photo) => {
    return (
      <Image key={photo.url} photo={photo} />
    );
  });
  return (
    <ImageFrame>
      {images}
    </ImageFrame>
  );
};

ImageList.propTypes = {
  photos: PhotoArray
};

export default ImageList;