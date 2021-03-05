import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Palette } from '../globalStyles.js';

class SortDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      sortOrder: this.props.sortOrder
    };
  }

  render() {
    let menu = <DropdownHead onClick={()=>{ this.setState({active: !this.state.active}); }}><div>{this.state.sortOrder}</div><Indicator>&#9662;</Indicator></DropdownHead>;
    let relevanceButton = <Button onClick={()=>{this.props.newSort('relevance'); }}>Relevance</Button>;
    let helpfulnessButton = <Button onClick={()=>{this.props.newSort('helpfulness'); }}>Helpfulness</Button>;
    let newestButton = <Button onClick={()=>{this.props.newSort('newest'); }}>Newest</Button>;

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

SortDropdown.propTypes = {
  newSort: propTypes.func,
  sortOrder: propTypes.string
};

export default SortDropdown;
