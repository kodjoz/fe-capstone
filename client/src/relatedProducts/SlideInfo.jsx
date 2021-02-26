import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const SlideInfo = (props) => {
  return (
    <div className={props.className}>
      <div> category </div>
      <div> name </div>
      <div> price </div>
      <div> stars </div>
    </div>
  );
};

SlideInfo.propTypes = {
  className: PropTypes.string.isRequired
};

const StyledSlideInfo = styled(SlideInfo)`
  width: 150px;
  height: 80px;
  background-color: lightblue;
`;

export default StyledSlideInfo;
