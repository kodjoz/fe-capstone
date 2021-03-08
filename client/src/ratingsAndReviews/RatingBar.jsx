import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Palette, ClickableText, LowPriorityText } from '../globalStyles.js';

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
      <RenderedBar percent={props.percent} empty={100 - props.percent}></RenderedBar>
      <Percentage>{Math.round(props.percent)}%</Percentage>
    </StarRow>
  );
};

const RenderedBar = (props) => {
  return (
    <Bar percent={props.percent} empty={100 - props.percent}>
      <Full percent={props.percent}></Full>
      <Empty empty={props.empty}></Empty>
    </Bar>
  );
};

const StarRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 0.5rem;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: hsla(0, 0%, 95%, 50%);
  }
`;

const RowName = styled(ClickableText)`
  flex-basis: 25%;
  align-self: flex-start;
`;

const Bar = styled.div`
  height: 1rem;
  flex-basis: 45%;
  align-self: flex-end;
  border: 1px solid ${Palette.borderGrey};
  display: flex;
`;

const Full = styled.div`
  height: 99%;
  width: ${props => props.percent}%;
  background: ${({ theme }) => theme.primary};
`;

const Empty = styled.div`
  display: inline;
  height: 99%;
  width: ${props => props.empty}%;
  background: hsla(0, 0%, 85%, 60%);
`;

const Percentage = styled(LowPriorityText)`
  margin-top: 0.3rem;
  flex-basis: 15%;
  text-align: right;
`;

RatingBar.propTypes = {
  stars: PropTypes.number,
  percent: PropTypes.number,
  newFilter: PropTypes.func
};

RenderedBar.propTypes = {
  percent: PropTypes.number,
  empty: PropTypes.number
};

export default RatingBar;
