import React from 'react';
import PropTypes from 'prop-types';
import { StyleType } from '../types';

const StyleThumbnail = (props) => {

  const thumbUrl = props.style.photos[0].thumbnail_url;

  return (
    <div style={{
      backgroundImage: `url(${thumbUrl})`,
      backgroundSize: 'cover',
      width: '4rem',
      height: '4rem',
      border: '1px solid black',
      borderRadius: '2rem'
    }}>
    </div>
  );
};

StyleThumbnail.propTypes = {
  selectedId: PropTypes.number,
  style: StyleType
};

export default StyleThumbnail;
