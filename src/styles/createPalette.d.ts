import { Color, Contrast } from '..';
import { CommonColors } from '../colors/common';

interface ShadeText {
  primary: string;
  secondary: string;
  disabled: string;
  hint: string;
  icon: string;
  divider: string;
  lightDivider: string;
}

interface ShadeInput {
  bottomLine: string;
  helperText: string;
  labelText: string;
  inputText: string;
  disabled: string;
}

interface ShadeAction {
  active: string;
  disabled: string;
}

interface ShadeBackground {
  default: string;
  paper: string;
  appBar: string;
  contentFrame: string;
  status: string;
}

export interface Shade {
  text: ShadeText;
  input: ShadeInput;
  action: ShadeAction;
  background: ShadeBackground;
}

export const light: Shade;
export const dark: Shade;

export interface Palette {
  common: CommonColors;
  type: Contrast;
  primary: Color;
  secondary: Color;
  error: Color;
  grey: Color;
  shades: {
    dark: Shade;
    light: Shade;
  };
  text: ShadeText;
  input: ShadeInput;
  action: ShadeAction;
  background: ShadeBackground;
  getContrastText: (color: string) => string;
}

export default function createPalette(
  palette: Partial<Palette>
): Palette;
