import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const SlideInfo = (props) => {
  return (
    <div className={props.className}>
      <div> {props.data.category} </div>
      <div> {props.data.name} </div>
      <div> {props.data.default_price} </div>
      <div> Rating </div>
    </div>
  );
};

SlideInfo.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

const StyledSlideInfo = styled(SlideInfo)`
  width: 150px;
  height: 100px;
  background-color: lightblue;
`;

export default StyledSlideInfo;
