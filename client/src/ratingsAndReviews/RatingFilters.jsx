import React from 'react';
import PropTypes from 'prop-types';
import { ClickableText, LowPriorityText } from '../globalStyles.js';

const RatingFilters = (props) => {
  var filters = props.filters.sort((a, b) => a - b);
  //let filterString = filters.toString();
  //filterString = filterString.slice(1, filterString.length);
  filters = JSON.stringify(filters);
  filters = filters.slice(1, filters.length - 1);
  return (
    <div>
      <LowPriorityText>Showing Reviews Starred: { filters }</LowPriorityText>
      <br></br>
      <ClickableText onClick={()=> { props.newFilter(null); }}>Remove All Filters</ClickableText>
    </div>
  );
};

RatingFilters.propTypes = {
  filters: PropTypes.array,
  newFilter: PropTypes.func
};

export default RatingFilters;
