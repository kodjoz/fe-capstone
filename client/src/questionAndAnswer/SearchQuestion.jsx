import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchQuestion = (props) => {
  // create an input field
  // add icons to it
  // add the state so it can store the search term
  // pass in all the questions as props so we can search each question
  // update the visible question???
  return (
    <Fragment>
      <SearchBar
        type="text"
        title="Search questions"
        id="search"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        onChange={props.onChange}
        value={props.value}
      ></SearchBar>
    </Fragment>
  );
};

const SearchBar = styled.input`
  grid-area: search-question;
  grid-row: span 1;
  padding: 10px 15px;
  margin: 8px 0;
  color: ${({ theme }) => theme.primaryText};
  border: 1px solid${({ theme }) => theme.borders};
`;

SearchQuestion.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default SearchQuestion;
