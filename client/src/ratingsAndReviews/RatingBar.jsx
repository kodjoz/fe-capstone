import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ClickableText } from '../globalStyles.js';

const RatingBar = (props) => {
  let star = 'Star';
  if (props.stars > 1) {
    star += 's';
  } else {
    star += ' ';
  }
  return (
    <StarRow id={props.stars} onClick={()=>{ props.newFilter(props.stars); }}>
      <RowName>{props.stars} {star}</RowName>
      <RenderedBar percent={props.percent}></RenderedBar>
    </StarRow>
  );
};

const RenderedBar = (props) => {
  return (
    <Bar percent={props.percent}>
      <Full percent={props.percent}></Full>
    </Bar>
  );
};

const StarRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RowName = styled(ClickableText)`

`;

const Bar = styled.div`
  margin-top: 2px;
  margin-right: 15%;
  height: 10px;
  flex-basis: 50%;
  border: 1px solid hsl(0, 0%, 40%);
`;

const Full = styled.div`
  height: 99%;
  width: ${props => props.percent}%;
  background: hsl(0, 100%, 60%);
`;

RatingBar.propTypes = {
  stars: PropTypes.number,
  percent: PropTypes.number,
  newFilter: PropTypes.func
};

RenderedBar.propTypes = {
  percent: PropTypes.number
};

export default RatingBar;
