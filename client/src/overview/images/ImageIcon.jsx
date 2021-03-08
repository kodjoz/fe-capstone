import React from 'react';
import PropTypes from 'prop-types';
import { PhotoType } from '../types';
import styled from 'styled-components';

const IconDiv = styled.div`
  width: 100%;
  padding-top: 100%;
  margin-top: 2rem;
  margin-bottom: .25rem;
  background-image: url('${props => props.url}');
  background-size: cover;
  background-position: center;
  border: 1px solid black;
`;

const Underline = styled.div`
  width: 100%;
  height: 5px;
  background-color: black;
  border-radius: 0;
`;

const ImageIcon = (props) => {
  return (
    <React.Fragment>
      <IconDiv url={props.photo.thumbnail_url}>
      </IconDiv>
      {props.isSelected && <Underline />}
    </React.Fragment>
  );
};

ImageIcon.propTypes = {
  photo: PhotoType,
  isSelected: PropTypes.bool,
  offset: PropTypes.number
};

export default ImageIcon;
