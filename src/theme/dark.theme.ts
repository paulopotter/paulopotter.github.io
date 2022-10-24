import { ITHEME, COLOR } from './theme.types';
import * as TOKENS from './tokens';

const COLOR_ONYX: COLOR = '#32373D';
const COLOR_LIGHT_SILVER: COLOR = '#D6D7D8';
const COLOR_CULTURED: COLOR = '#F5F5F5';
const COLOR_SILVER_SAND: COLOR = '#C1C3C4';
const COLOR_SILVER_SAND_ALPHA_70: COLOR = '#rgba(193, 195, 196, .7)';
const COLOR_DARK_JUNGLE_GREEN: COLOR = '#1e2124';
const COLOR_MEDIUM_SKY_BLUE: COLOR = '#79DDF5';
const COLOR_MEDIUM_SKY_BLUE_ALPHA_10: COLOR = 'rgba(121, 221, 245, .1)';
const COLOR_MEDIUM_SKY_BLUE_ALPHA_20: COLOR = 'rgba(121, 221, 245, .2)';
const COLOR_MEDIUM_SKY_BLUE_ALPHA_50: COLOR = 'rgba(121, 221, 245, .5)';
const COLOR_BEGONIA: COLOR = '#FF7171';
// const COLOR_MEDIUM_SKY_BLUE_ALPHA_70: COLOR = 'rgba(121, 221, 245, .7)';

export const THEME_DARK: ITHEME = {
  name: 'dark',
  background: COLOR_ONYX,
  border: COLOR_MEDIUM_SKY_BLUE_ALPHA_50,
  boxShadow: TOKENS.COLOR_BLACK_ALPHA_10,
  button: {
    background: COLOR_DARK_JUNGLE_GREEN,
    color: COLOR_MEDIUM_SKY_BLUE,
  },
  card: {
    background: COLOR_DARK_JUNGLE_GREEN,
  },
  code: {
    background: TOKENS.COLOR_WHITE_ALPHA_10,
    color: COLOR_BEGONIA,
  },
  color: {
    primary: COLOR_SILVER_SAND,
    secondary: COLOR_LIGHT_SILVER,
    tertiary: COLOR_SILVER_SAND_ALPHA_70,
  },
  link: COLOR_MEDIUM_SKY_BLUE,
  outline: COLOR_MEDIUM_SKY_BLUE,
  related: COLOR_SILVER_SAND_ALPHA_70,
  table: {
    header: {
      background: {
        primary: COLOR_MEDIUM_SKY_BLUE_ALPHA_50,
        secondary: COLOR_ONYX,
      },
      color: COLOR_CULTURED,
    },
    body: {
      background: {
        primary: COLOR_MEDIUM_SKY_BLUE_ALPHA_20,
        secondary: COLOR_MEDIUM_SKY_BLUE_ALPHA_10,
      },
    },
  },
};
