import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PhotoArray } from '../../types';

const IndicatorsDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${props => props.selected ? 'red' : 'black'};
  margin: 2rem;
`;

const IconIndicatorList = (props) => {

  const icons = props.photos.map((val, index) => {
    let selected = index === props.selectedIndex;
    return (
      <Icon key={val.url} selected={selected} />
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
  selectedIndex: PropTypes.number
};

export default IconIndicatorList;