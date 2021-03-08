import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PhotoArray } from '../types';
import ImageIcon from './ImageIcon';

const IconListFrame = styled.div`
  width: 80px;
  position: absolute;
  top: 2rem;
  height: 80%;
  left: 2rem;
`;

const ImageIconList = (props) => {

  const icons = props.photos.map((photo, index) => {
    const isSelected = index === props.imageIndex;
    return (
      <ImageIcon
        key={photo.thumbnail_url}
        photo={photo}
        isSelected={isSelected}
        offset={0} />
    );
  });

  return (
    <IconListFrame>
      {icons}
    </IconListFrame>
  );
};

ImageIconList.propTypes = {
  photos: PhotoArray,
  imageIndex: PropTypes.number
};

export default ImageIconList;
