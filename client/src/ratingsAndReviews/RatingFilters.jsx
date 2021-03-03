import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ClickableText } from '../globalStyles.js';
import StarRow from '../starRow.jsx';

const RatingFilters = (props) => {
  return (
    <div>
      <span>Showing Reviews Starred: { JSON.stringify(props.filters) }</span>
      <div>
        {props.filters.map((star) => {
          console.log(JSON.stringify(star));
          <StarRow size={5} rating={star * 20} />;
        })}
      </div>
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
