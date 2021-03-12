import React from 'react';
import styled from 'styled-components';
import { lightTheme, darkTheme } from '../theme';

const Table = styled.table`
  width: 600px;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
`;

const Cell = styled.td`
  height: 4rem;
  width: 200px;
  border-bottom: 10px solid #fff;
  font-size: 90%;
`;

const ColorCell = styled(Cell)`
  background-color: ${props => props.background};
`;

const themeKeys = Object.keys(lightTheme);

const ThemeDisplay = () => {

  const rows = themeKeys.map((key) => {
    const lightColor = lightTheme[key];
    const darkColor = darkTheme[key];
    return <tr key={key}>
      <Cell>{key}</Cell>
      <ColorCell background={lightColor}/>
      <ColorCell background={darkColor} />
    </tr>;
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Light Theme</th>
          <th>Dark Theme</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  );
};

export default ThemeDisplay;
