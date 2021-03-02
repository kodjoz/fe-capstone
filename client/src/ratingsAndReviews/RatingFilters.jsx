import React from 'react';
import PropTypes from 'prop-types';

const RatingFilters = (props) => {
  return (
    <div>
      <p>Showing Reviews Starred: { JSON.stringify(props.filters) }</p>
      <p onClick={()=> { props.newFilter(null); }}>Remove All Filters</p>
    </div>
  );
};

RatingFilters.propTypes = {
  filters: PropTypes.array,
  newFilter: PropTypes.func
};

export default RatingFilters;
