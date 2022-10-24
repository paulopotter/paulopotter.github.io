import { ITHEME, COLOR } from './theme.types';
import * as TOKENS from './tokens';

const COLOR_CULTURED: COLOR = '#F5F5F5';
const COLOR_ELETRIC_INDIGO: COLOR = '#6F11FB';
const COLOR_ELETRIC_INDIGO_ALPHA_10: COLOR = 'rgba(111, 17, 251, .1)';
const COLOR_ELETRIC_INDIGO_ALPHA_20: COLOR = 'rgba(111, 17, 251, .2)';
const COLOR_ELETRIC_INDIGO_ALPHA_50: COLOR = 'rgba(111, 17, 251, .5)';
const COLOR_ONYX_LIGHT: COLOR = '#363D42';
const COLOR_ONYX_LIGHT_ALPHA_70: COLOR = 'rgba(54, 61, 66, .7)';
const COLOR_VIOLET: COLOR = '#9700A1';
const COLOR_GOLDEN_GATE_BRIDGE: COLOR = '#B73333';

export const THEME_LIGHT: ITHEME = {
  name: 'light',
  background: COLOR_CULTURED,
  border: COLOR_VIOLET,
  boxShadow: TOKENS.COLOR_BLACK_ALPHA_10,
  button: {
    background: TOKENS.COLOR_WHITE,
    color: COLOR_ELETRIC_INDIGO,
  },
  card: {
    background: TOKENS.COLOR_WHITE,
  },
  code: {
    background: TOKENS.COLOR_BLACK_ALPHA_10,
    color: COLOR_GOLDEN_GATE_BRIDGE,
  },
  color: {
    primary: TOKENS.COLOR_BLACK,
    secondary: COLOR_ONYX_LIGHT,
    tertiary: COLOR_ONYX_LIGHT_ALPHA_70,
  },
  link: COLOR_ELETRIC_INDIGO,
  outline: COLOR_ELETRIC_INDIGO,
  related: COLOR_ONYX_LIGHT_ALPHA_70,
  table: {
    header: {
      background: {
        primary: COLOR_ELETRIC_INDIGO_ALPHA_50,
        secondary: COLOR_CULTURED,
      },
      color: TOKENS.COLOR_WHITE,
    },
    body: {
      background: {
        primary: COLOR_ELETRIC_INDIGO_ALPHA_20,
        secondary: COLOR_ELETRIC_INDIGO_ALPHA_10,
      },
    },
  },
};
