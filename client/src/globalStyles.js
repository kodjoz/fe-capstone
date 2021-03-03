import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const Global = createGlobalStyle`
  body {
    margin: 0 10%;
    color: hsl(0, 5%, 30%);
    background-color: hsl(345, 75%, 99%);
    font-family: Garamond, Helvetica, Arial;
    font-size: 17px;
  }
`;
//grey violet
//violet: hsl(259, 80%, 98%)
//navy: hsl(240, 15%, 90%)

const TilePreset = styled.div`
  background-color: hsl(0, 15%, 99%);
  border: solid 1px #f2f2f2;
`;

//different font maybe?
const ModuleHeaderPreset = styled.h3`
  font-size: 1.2em;
  margin-left: 3%;
  padding: 5px 0;
  text-decoration: underline 2px hsl(0, 0%, 40%);
`;

const ClickableTextPreset = styled.span`
  cursor: pointer;
  font-style: italic;
  text-decoration: underline;
  font-size: 0.8em;
  color: hsl(0, 0%, 40%);
`;
//ALT more salient red clickable color: hsl(0, 100%, 50%);

const LowPriorityTextPreset = styled.span`
  font-size: 0.75em;
  font-style: italic;
  color: hsl(0, 0%, 55%);
`;

const ButtonPreset = styled.button`
  text-transform: uppercase;
  background-color: hsl(0, 15%, 99%);
  color: hsl(0, 0%, 40%);
  border: solid 1px #f2f2f2;
  height: 40px;
  padding: 0 15px;
`;

const ThumbnailPreset = styled.img`
  display: inline-block;
  border: 1px solid #f0f0f5;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  width: 100px;
  height: 100px;
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
export const ModuleHeader = ModuleHeaderPreset;
export const ClickableText = ClickableTextPreset;
export const LowPriorityText = LowPriorityTextPreset;
export const Button = ButtonPreset;
export const Thumbnail = ThumbnailPreset;
export const Helpful = HelpfulPreset;
export const HelpfulYes = HelpfulYesPreset;
export const Signature = SignaturePreset;
