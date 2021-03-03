import React from 'react';
import styled from 'styled-components';
import { DropdownMenu } from '../globalStyles.js';

const SortDropdown = () => {
  return (
    <DummyFlex><DropdownMenu name="Relevance" value="Relevance">
      <option>Relevance</option>
      <option>Helpfulness</option>
      <option>Newest</option>
    </DropdownMenu></DummyFlex>
  );
  // return (
  //   <div>
  //     <Button>Sort By &#x2304;</Button>
  //     <DropdownItems>
  //       <div id='sort1'>Most Relevant</div>
  //       <div id='sort2'>Most Helpful</div>
  //       <div id='sort3'>Newest</div>
  //     </DropdownItems>
  //   </div>
  // );
};

const DummyFlex = styled.div`
  flex-basis: 100%;
  justify-content: flex-end;
  align-content: flex-end;
  align-items: flex-end;
  margin-left: 80%;
`;

// const DropdownItems = styled.div``;

export default SortDropdown;
