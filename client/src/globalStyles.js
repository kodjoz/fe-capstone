import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const Global = createGlobalStyle`
  body {
    margin: 0 10%;
    color: hsl(0, 5%, 30%);
    background-color: hsl(345, 75%, 99%)
  }
`;
//grey violet
//violet: hsl(259, 80%, 98%)
//navy: hsl(240, 15%, 90%)

const TilePreset = styled.div`
  background-color: hsl(0, 15%, 99%);
  border: solid 1px #f2f2f2;
`;


const ModuleHeaderPreset = styled.h3`

`;

const LowPriorityTextPreset = styled.span`
  font-size: 0.75em;
  font-style: italic;
  color: grey;
`;

const ClickableTextPreset = styled.span`
  font-style: italic;
  text-decoration: underline;
  font-size: 0.8em;
  cursor: pointer;
`;

const ButtonPreset = styled.button`
color: red;
`;

const HelpfulPreset = styled.div`
  display: inline;
  font-style: italic;
`;

const HelpfulYesPreset = styled.div`
  display: inline;
  cursor: pointer;
  font-style: normal;
  color: hsl(0, 100%, 50%);
  text-decoration: underline;
`;

const SignaturePreset = styled.div`
  display: inline-block;
  @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
  font-family: 'Sacramento', cursive;
  font-size: 20px;
  color: hsl(0, 100%, 60%);
`;

export const GlobalStyle = Global;
export const Tile = TilePreset;
export const Helpful = HelpfulPreset;
export const HelpfulYes = HelpfulYesPreset;
export const Signature = SignaturePreset;
export const ModuleHeader = ModuleHeaderPreset;
export const Button = ButtonPreset;
export const ClickableText = ClickableTextPreset;
export const LowPriorityText = LowPriorityTextPreset;
