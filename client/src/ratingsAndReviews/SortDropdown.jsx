import React from 'react';
import styled from 'styled-components';
import { Button, Palette } from '../globalStyles.js';

class SortDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      sortOrder: 'relevance'
    };
  }
  render() {
    let menu = <DropdownHead onClick={()=>{ this.setState({active: !this.state.active}); }}><div>{this.state.sortOrder}</div><Indicator>&#9662;</Indicator></DropdownHead>;
    let relevanceButton = <Button>Relevance</Button>;
    let helpfulnessButton = <Button>Helpfulness</Button>;
    let newestButton = <Button>Newest</Button>;
    if (this.state.active) {
      if (this.state.sortOrder === 'relevance') {
        menu = <DropdownMenu>
          <DropdownHead onClick={()=>{ this.setState({active: !this.state.active}); }}><div>{this.state.sortOrder}</div><UpIndicator>&#9662;</UpIndicator></DropdownHead>
          {helpfulnessButton}
          {newestButton}
        </DropdownMenu>;
      } else if (this.state.sortOrder === 'helpfulness') {
        menu = <DropdownMenu>
          <DropdownHead onClick={()=>{ this.setState({active: !this.state.active}); }}><div>{this.state.sortOrder}</div><UpIndicator>&#9662;</UpIndicator></DropdownHead>
          {relevanceButton}
          {newestButton}
        </DropdownMenu>;
      } else {
        menu = <DropdownMenu>
          <DropdownHead onClick={()=>{ this.setState({active: !this.state.active}); }}><div>{this.state.sortOrder}</div><UpIndicator>&#9662;</UpIndicator></DropdownHead>
          {relevanceButton}
          {helpfulnessButton}
        </DropdownMenu>;
      }
    }
    return (
      <div>
        {menu}
      </div>

    );
  }
}

//position me rightward, either here or in ReviewsList
const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 12rem;
  width: 14rem;
`;
// text-transform: uppercase;
//   background-color: hsl(0, 15%, 99%);
//   color: hsl(0, 0%, 40%);
//   border: solid 1px #f2f2f2;
//   height: 4rem;
//   padding: 0 1.5rem;
//   cursor: pointer;
const DropdownHead = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Indicator = styled.div`
  font-size: 1.25em;
  margin-left: 1em;
  color: ${Palette.lowPriority};
`;

const UpIndicator = styled(Indicator)`
  transform: rotate(180deg);
  margin-top: 0.2rem;
`;

// const DummyFlex = styled.div`
//   flex-basis: 100%;
//   justify-content: flex-end;
//   align-content: flex-end;
//   align-items: flex-end;
// `;

// return (
//   <DummyFlex><DropdownMenu name="Relevance" value="Relevance">
//     <option>Relevance</option>
//     <option>Helpfulness</option>
//     <option>Newest</option>
//   </DropdownMenu></DummyFlex>
// );

export default SortDropdown;
