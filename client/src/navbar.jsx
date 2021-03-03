import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
  padding: 1rem;
`;

const NavLink = styled.span`
  margin-right: 2rem;
  color: black;
`;


const Navbar = () => {
  return (
    <NavContainer>
      <NavLink>
        <Link to="/">Home</Link>
      </NavLink>
      <NavLink>
        <Link to="/products/19378">Alberto Romper (19378)</Link>
      </NavLink>
      <NavLink>
        <Link to="/products/19089">Camo Onesie (19089</Link>
      </NavLink>
      <NavLink>
        <Link to="/products/19091">Morning Joggers (19091)</Link>
      </NavLink>
    </NavContainer>
  );
};


export default Navbar;
