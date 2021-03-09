import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PhotoArray } from '../types';
import ImageIcon from './ImageIcon';

const IconListFrame = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2rem;
  height: 90%;
  align-items: center;
  left: 2rem;
`;

const ArrowButton = styled.button`
  border: none;
  margin: none;
  cursor: pointer;
  font-size: 3rem;
  background: transparent;
  text-align: center;
  height: ${props => props.height}px;
`;

const ArrowPlaceholder = styled.div`
  border: none;
  height: ${props => props.height}px;
`;

const ThumbnailTrack = styled.div`
  // height: 80%;
  // border: 1px solid yellow;
  height: ${props => props.height}px;
  overflow: hidden;
`;

const ImageIconList = (props) => {

  const iconListFrameHeight = props.displayHeight * 0.9;
  // console.log(`iconListFrameHeight: ${iconListFrameHeight}`);
  // the ThumbnailTrack occupies 7/9 of the height of IconListFrame
  const trackHeight = iconListFrameHeight * (7 / 9);
  // console.log(`trackHeight: ${trackHeight}`);
  // each thumbnail and its margin will occupy 1/7 of the ThumbnailTrack
  const oneSeventh = (trackHeight / 7);
  // 90% of that will be the icon
  const iconSize = oneSeventh * .9;
  // and the remainder will be margin-bottom
  const margin = oneSeventh - iconSize;
  const offset = trackHeight * props.thumbnailsIndex;

  const icons = props.photos.map((photo, index) => {
    const isSelected = index === props.imageIndex;
    const selectImage = () => {
      props.setImageIndex(index);
    };
    return (
      <ImageIcon
        selectImage={selectImage}
        key={photo.thumbnail_url}
        iconSize={iconSize}
        margin={margin}
        photo={photo}
        isSelected={isSelected}
        offset={offset} />
    );
  });

  const topElement = props.thumbnailsIndex < 1 ? <ArrowPlaceholder height={oneSeventh} /> : <ArrowButton height={oneSeventh} onClick={props.scrollUp}>▲</ArrowButton>;
  const maxThumbnailIndex = Math.ceil(props.photos.length / 7) - 1;
  const bottomElement = props.thumbnailsIndex < maxThumbnailIndex ? <ArrowButton height={oneSeventh} onClick={props.scrollDown}>▼</ArrowButton> : <ArrowPlaceholder height={oneSeventh} />;
  return (
    <IconListFrame>
      {topElement}
      <ThumbnailTrack height={trackHeight}>
        {icons}
      </ThumbnailTrack>
      {bottomElement}
    </IconListFrame>
  );
};

ImageIconList.propTypes = {
  setImageIndex: PropTypes.func,
  scrollUp: PropTypes.func,
  scrollDown: PropTypes.func,
  displayHeight: PropTypes.number,
  thumbnailsIndex: PropTypes.number,
  photos: PhotoArray,
  imageIndex: PropTypes.number
};

export default ImageIconList;
