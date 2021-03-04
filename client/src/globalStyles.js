import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

//Color Palette:
//Red: hsl(0, 100%, 60%) //<- used for salient or 'flavorful' elements
//Pastel Purple: hsl(270, 80%, 96%) //<- secondary salient text color
//Off-Black: hsl(0, 5%, 30%) //<- used for main text
//Grey: hsl(0, 0%, 40%) //<- used for clickable and low-priority text
//(Background) Red-Tinged Grey: hsl(0, 5%, 30%)
//(Foreground) Red-Tinged White: hsl(0, 15%, 99%)
//(Borders) White-Grey: #f2f2f2

const PalettePreset = {
  primary: 'hsl(270, 80%, 96%)',
  secondary: 'hsl(270, 80%, 96%)',
  lowPriority: 'hsl(0, 0%, 40%)',
  black: 'hsl(0, 5%, 30%)',
  foreground: 'hsl(0, 15%, 99%)',
  background: 'hsl(345, 75%, 99%);',
  borderGrey: '#f2f2f2'
};

const GlobalPreset = createGlobalStyle`
  body {
    margin: 0 10%;
    color: hsl(0, 5%, 30%);
    background-color: hsl(345, 75%, 99%);
    font-family: Garamond, Helvetica, Arial;
    font-size: 17px;
  }
`;
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

//font not finalized, all I know is I don't want it to be Garamond
const ItalicPreset = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
  font-family: Playfair Display, serif;
  font-style: italic;
`;

const ClickableTextPreset = styled.span`
  cursor: pointer;
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

const DropdownMenuPreset = styled.select`
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
  cursor: pointer;
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

export const GlobalStyle = GlobalPreset;
export const Tile = TilePreset;
export const ModuleHeader = ModuleHeaderPreset;
export const ClickableText = ClickableTextPreset;
export const LowPriorityText = LowPriorityTextPreset;
export const Button = ButtonPreset;
export const DropdownMenu = DropdownMenuPreset;
export const Thumbnail = ThumbnailPreset;
export const Helpful = HelpfulPreset;
export const HelpfulYes = HelpfulYesPreset;
export const Signature = SignaturePreset;
export const Palette = PalettePreset;
export const Italic = ItalicPreset;
