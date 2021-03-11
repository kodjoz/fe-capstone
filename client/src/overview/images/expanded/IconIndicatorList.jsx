import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PhotoArray } from '../../types';

const IndicatorsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 2rem;
  width: 100%;
`;

const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${props => props.selected ? 'red' : 'black'};
  cursor: pointer;
`;

const IconIndicatorList = (props) => {

  const icons = props.photos.map((val, index) => {
    let selected = index === props.selectedIndex;
    const updateSelected = () => props.setImageIndex(index);
    return (
      <Icon key={val.url}
        onClick={updateSelected}
        selected={selected} />
    );
  });

  return (
    <IndicatorsDiv>
      {icons}
    </IndicatorsDiv>
  );
};

IconIndicatorList.propTypes = {
  photos: PhotoArray,
  selectedIndex: PropTypes.number,
  setImageIndex: PropTypes.func
};

export default IconIndicatorList;