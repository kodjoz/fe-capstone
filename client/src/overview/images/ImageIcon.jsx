import React from 'react';
import PropTypes from 'prop-types';
import { PhotoType } from '../types';
import styled from 'styled-components';

const IconDiv = styled.div`
  width: 100%;
  padding-top: 100%;
  background-image: url('${props => props.url}');
  background-size: cover;
  background-position: center;
  margin-bottom: 2rem;
  border: 1px solid black;
`;

const ImageIcon = (props) => {
  return (
    <IconDiv url={props.photo.thumbnail_url}>
    </IconDiv>
  );
};

ImageIcon.propTypes = {
  photo: PhotoType,
  offset: PropTypes.number
};

export default ImageIcon;
