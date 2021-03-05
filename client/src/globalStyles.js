import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

//Color Palette:
//Primary/Red: hsl(0, 100%, 60%) //<- used for salient or 'flavorful' elements
//Secondary/Pastel Purple: hsl(270, 80%, 96%) //<- secondary salient text color
//Low-Priority/Grey: hsl(0, 0%, 40%) //<- used for clickable and low-priority text
//Black (Off-Black): hsl(0, 5%, 30%) //<- used for main text, body text defaults to this unless overridden
//Page Background/Red-Tinged Grey: hsl(0, 5%, 30%)
//Page Foreground/Red-Tinged White: hsl(0, 15%, 99%) //<- Tiles of content use this as background-color
//Borders/White-Grey: #f2f2f2

const PalettePreset = {
  primary: 'hsl(0, 100%, 60%)',
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
    font-size: 106.25%;
  },
`;
//note: font-size of 106.25% equates to 17px, since default is 16px

const TilePreset = styled.div`
  background-color: hsl(0, 15%, 99%);
  border: solid 1px #f2f2f2;
`;

//different font maybe?
const ModuleHeaderPreset = styled.h3`
  font-size: 1.2rem;
  margin-left: 3%;
  padding: 5px 0;
  text-decoration: underline 2px hsl(0, 0%, 40%);
`;

//NOTE: font not finalized, all I know is I don't want it to be Garamond
const ItalicPreset = styled.span`
  font-style: italic;
`;

const ClickableTextPreset = styled.span`
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.9rem;
  color: hsl(0, 0%, 40%);
`;
//ALT more salient red clickable color: hsl(0, 100%, 50%);

const LowPriorityTextPreset = styled.span`
  font-size: 0.75rem;
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
  cursor: pointer;
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
  @import url('https://fonts.googleapis.com/css2?family=Tangerine&display=swap');
  font-family: Tangerine, cursive;
  display: inline-block;
  font-size: 1.25rem;
  color: hsl(0, 100%, 60%);
`;

const ModalBackgroundPreset = styled.div`
  background-color: hsla(0, 0%, 40%, 75%);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
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
export const ModalBackground = ModalBackgroundPreset;
