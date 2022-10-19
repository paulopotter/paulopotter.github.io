import { ITHEME } from './theme.types';
import * as TOKENS from './tokens';

export const THEME_LIGHT: ITHEME = {
  name: 'light',
  background: TOKENS.COLOR_CULTURED,
  border: TOKENS.COLOR_VIOLET,
  boxShadow: TOKENS.COLOR_BLACK_ALPHA_10,
  button: {
    background: TOKENS.COLOR_WHITE,
    color: TOKENS.COLOR_ELETRIC_INDIGO,
  },
  card: {
    background: TOKENS.COLOR_WHITE,
  },
  code: {
    background: TOKENS.COLOR_BLACK_ALPHA_10,
    color: TOKENS.COLOR_GOLDEN_GATE_BRIDGE,
  },
  color: {
    primary: TOKENS.COLOR_BLACK,
    secondary: TOKENS.COLOR_ONYX_LIGHT,
    tertiary: TOKENS.COLOR_ONYX_LIGHT_ALPHA_70,
  },
  link: TOKENS.COLOR_ELETRIC_INDIGO,
  outline: TOKENS.COLOR_ELETRIC_INDIGO,
  related: TOKENS.COLOR_ONYX_LIGHT_ALPHA_70,
  table: {
    header: {
      background: {
        primary: TOKENS.COLOR_ELETRIC_INDIGO_ALPHA_50,
        secondary: TOKENS.COLOR_CULTURED,
      },
      color: TOKENS.COLOR_WHITE,
    },
    body: {
      background: {
        primary: TOKENS.COLOR_ELETRIC_INDIGO_ALPHA_20,
        secondary: TOKENS.COLOR_ELETRIC_INDIGO_ALPHA_10,
      },
    },
  },
};
