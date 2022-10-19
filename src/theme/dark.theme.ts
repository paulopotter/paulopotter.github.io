import { ITHEME } from './theme.types';
import * as TOKENS from './tokens';

export const THEME_DARK: ITHEME = {
  name: 'dark',
  background: TOKENS.COLOR_ONYX,
  border: TOKENS.COLOR_MEDIUM_SKY_BLUE_ALPHA_50,
  boxShadow: TOKENS.COLOR_BLACK_ALPHA_10,
  button: {
    background: TOKENS.COLOR_DARK_JUNGLE_GREEN,
    color: TOKENS.COLOR_MEDIUM_SKY_BLUE,
  },
  card: {
    background: TOKENS.COLOR_DARK_JUNGLE_GREEN,
  },
  code: {
    background: TOKENS.COLOR_WHITE_ALPHA_10,
    color: TOKENS.COLOR_BEGONIA,
  },
  color: {
    primary: TOKENS.COLOR_SILVER_SAND,
    secondary: TOKENS.COLOR_LIGHT_SILVER,
    tertiary: TOKENS.COLOR_SILVER_SAND_ALPHA_70,
  },
  link: TOKENS.COLOR_MEDIUM_SKY_BLUE,
  outline: TOKENS.COLOR_MEDIUM_SKY_BLUE,
  related: TOKENS.COLOR_SILVER_SAND_ALPHA_70,
  table: {
    header: {
      background: {
        primary: TOKENS.COLOR_MEDIUM_SKY_BLUE_ALPHA_50,
        secondary: TOKENS.COLOR_ONYX,
      },
      color: TOKENS.COLOR_CULTURED,
    },
    body: {
      background: {
        primary: TOKENS.COLOR_MEDIUM_SKY_BLUE_ALPHA_20,
        secondary: TOKENS.COLOR_MEDIUM_SKY_BLUE_ALPHA_10,
      },
    },
  },
};
