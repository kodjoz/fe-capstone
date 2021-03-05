import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StarRow from '../starRow.jsx';


const SlideInfo = (props) => {
  let average = 0;
  if (props.reviewData) {
    average = (props.reviewData.sum / props.reviewData.count) * 20;
  }
  return (
    <div className={props.className}>
      <p> {props.data.category} </p>
      <p> {props.data.name} </p>
      <p> {props.data.default_price} </p>
      <StarRow rating={average} size={20}></StarRow>
    </div>
  );
};

SlideInfo.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  reviewData: PropTypes.object
};

const StyledSlideInfo = styled(SlideInfo)`
  width: 200px;
  height: 100px;
  background: linear-gradient(0deg, #000 30%, #99999944 100%);

  p {
    color: white;
    margin: 0;
  }
`;

export default StyledSlideInfo;
