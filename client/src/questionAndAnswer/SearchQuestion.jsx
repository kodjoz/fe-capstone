import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchQuestion = (props) => {
  // create an input field
  // add icons to it
  // add the state so it can store the search term
  // pass in all the questions as props so we can search each question
  // update the visible question???
  return (
    <StyledSearch type="text"
      placeholder="Have a question? Search for answers..."
      onChange={props.onChange}
      value={props.value}
    ></StyledSearch>
  );
};

const StyledSearch = styled.input`
  grid-area: searchQuestion;
  grid-row: span 1;
`;

SearchQuestion.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default SearchQuestion;
