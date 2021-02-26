import React from 'react';
import styled from 'styled-components';

const SearchQuestion = (props) => {
  // create an input field
  // add icons to it
  // add the state so it can store the search term
  // pass in all the questions as props so we can search each question
  // update the visible question???
  return (
    <input type="text"
    placeholder="Have a question? Search for answers..."
    onChange={props.onChange}
    value={props.value}
    ></input>
  )
};

export default SearchQuestion;