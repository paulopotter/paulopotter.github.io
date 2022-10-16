import { ITHEME } from './theme.types';
import * as TOKENS from './tokens';
// import { THEME_LIGHT } from './light.theme';

export const THEME_DARK: ITHEME = {
  name: 'dark',
  background: TOKENS.COLOR_ONYX,
  border: TOKENS.COLOR_PASTEL_BLUE,
  boxShadow: TOKENS.COLOR_WHITE_ALPHA_05,
  button: {
    background: TOKENS.COLOR_ONYX,
    color: TOKENS.COLOR_MEDIUM_SKY_BLUE,
    inverted: {
      background:TOKENS.COLOR_CULTURED,
      color:TOKENS.COLOR_ELETRIC_INDIGO,
    }
  },
  card: {
    background: TOKENS.COLOR_CHINESE_BLACK,
  },
  code: {
    background: TOKENS.COLOR_BLACK_OLIVE,
    color: TOKENS.COLOR_BEGONIA,
  },
  color: {
    primary: TOKENS.COLOR_GAINSBORO,
    secondary: TOKENS.COLOR_BUBBLES,
    tertiary: TOKENS.COLOR_ROMAN_SILVER,
  },
  link: TOKENS.COLOR_MEDIUM_SKY_BLUE,
  outline: TOKENS.COLOR_MEDIUM_SKY_BLUE,
  related: TOKENS.COLOR_VIOLET,
  table: {
    header: {
      background: {
        primary: TOKENS.COLOR_AURO_METAL_SAURUS,
        secondary: TOKENS.COLOR_RAISIN_BLACK,
      },
      color: TOKENS.COLOR_WHITE,
    },
    body: {
      background: {
        primary: TOKENS.COLOR_RAISIN_BLACK,
        secondary: TOKENS.COLOR_ROMAN_SILVER,
      },
      color: TOKENS.COLOR_ONYX,
    }
  }
};
