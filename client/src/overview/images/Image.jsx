import React from 'react';
import styled from 'styled-components';
import { PhotoType } from '../types';

const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${props => props.url}');
  background-size: cover;
  flex: 0 0 auto;
`;

const Image = (props) => {
  return (
    <ImageDiv url={props.photo.url} />
  );
};

Image.propTypes = {
  photo: PhotoType
};

export default Image;