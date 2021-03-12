import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PhotoType } from '../../types';

const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${props => props.url}');
  background-size: cover;
  background-position: center;
  flex: 0 0 auto;
  transform: translateX(-${props => props.offset}px);
  transition: transform .5s ease-in-out;
  cursor: ${props => props.cursor};
`;

const Image = (props) => {

  const handleClick = () => {
    props.onImageClick();
  };

  return (
    <ImageDiv
      onClick={handleClick}
      cursor={props.cursor}
      url={props.photo.url}
      offset={props.offset} />
  );
};

Image.propTypes = {
  photo: PhotoType,
  offset: PropTypes.number,
  cursor: PropTypes.string,
  onImageClick: PropTypes.func
};

export default Image;
