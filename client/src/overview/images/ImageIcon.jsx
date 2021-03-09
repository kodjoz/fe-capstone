import React from 'react';
import PropTypes from 'prop-types';
import { PhotoType } from '../types';
import styled from 'styled-components';

const IconDiv = styled.div`
  // width: 90%;
  // padding-top: 90%;
  width: ${props => props.iconSize}px;
  height: ${props => props.iconSize}px;
  margin-bottom: ${props => props.margin}px;
  margin-top: 0;
  background-image: url('${props => props.url}');
  background-size: cover;
  background-position: center;
  border: 1px solid black;
  box-sizing: border-box;
  cursor: pointer;
  transform: translateY(-${props => props.offset}px);
  transition: transform: .5s ease-in-out;
  box-shadow: ${props => props.isSelected ? '2px 2px 2px 2px rgba(0,0,0,0.8)' : 'none'};
`;

const ImageIcon = (props) => {
  return (
    <React.Fragment>
      <IconDiv
        offset={props.offset}
        iconSize={props.iconSize}
        margin={props.margin}
        isSelected={props.isSelected}
        onClick={() => props.selectImage()}
        url={props.photo.thumbnail_url}>
      </IconDiv>
    </React.Fragment>
  );
};

ImageIcon.propTypes = {
  selectImage: PropTypes.func,
  photo: PhotoType,
  isSelected: PropTypes.bool,
  offset: PropTypes.number,
  iconSize: PropTypes.number,
  margin: PropTypes.number
};

export default ImageIcon;
