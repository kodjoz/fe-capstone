import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PhotoType } from '../types';

const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${props => props.url}');
  background-size: cover;
  background-position: center;
  flex: 0 0 auto;
  transform: translateX(-${props => props.offset}px);
  transition: transform 1s ease-in-out;
`;

const Image = (props) => {
  return (
    <ImageDiv
      url={props.photo.url}
      offset={props.offset} />
  );
};

Image.propTypes = {
  photo: PhotoType,
  offset: PropTypes.number
};

export default Image;